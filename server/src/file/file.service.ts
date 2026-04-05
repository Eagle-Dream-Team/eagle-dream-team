import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SupabaseClient } from '@supabase/supabase-js';
import { env } from 'process';
import { FileQueryDto } from './file.dto';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma;
  }

  supabase = new SupabaseClient(
    process.env.SUPABASE_PROJECT_URL ?? '',
    process.env.SUPABASE_SECRET_KEY ?? '',
  );

  async upload(
    file: Express.Multer.File,
    filename: string,
    uploaded_by: string,
    autoRenameDuplicates?: boolean,
  ) {
    let newFilename = filename;
    let lastN = 1;

    let isDuplicate = await this.prisma.file.findFirst({
      where: { title: newFilename },
    });

    while (isDuplicate) {
      if (autoRenameDuplicates) {
        let arr = filename.split('.');
        newFilename =
          arr.slice(0, arr.length - 1) + ` (${lastN++}).` + arr.slice(-1);

        isDuplicate = await this.prisma.file.findFirst({
          where: { title: newFilename },
        });
      } else {
        throw new BadRequestException(
          'File with same title is already uploaded by user',
        );
      }
    }
    file.filename = newFilename;

    const { error } = await this.supabase.storage
      .from('files')
      .upload(uploaded_by + '/' + newFilename, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) throw new BadRequestException(error.message);

    const publicUrl = this.supabase.storage
      .from('files')
      .getPublicUrl(uploaded_by + '/' + newFilename).data.publicUrl;

    const downloadUrl = this.supabase.storage
      .from('files')
      .getPublicUrl(uploaded_by + '/' + newFilename, {
        download: true,
      }).data.publicUrl;

    return await this.prisma.file.create({
      data: {
        title: newFilename,
        url: publicUrl,
        download_url: downloadUrl,
        file_type: file.mimetype,
        uploaded_by,
      },
    });
  }

  async find(file_id: number) {
    return await this.prisma.file.findFirst({
      where: { file_id },
      include: {
        uploader: {
          select: {
            user_id: true,
            first_name: true,
            last_name: true,
            email: true,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.file.findMany({
      where: {},
    });
  }

  async downloadLink() {}

  async findUserFiles(
    userId: string,
    { page = 1, limit = 10, filter, shared_by }: FileQueryDto,
  ) {
    const skip = (page - 1) * limit;

    const where = (() => {
      if (filter === 'mine') {
        return { uploaded_by: userId };
      }

      if (filter === 'shared_with_me') {
        return {
          messages: {
            some: { receiver_id: userId, file_id: { not: null } },
          },
        };
      }

      if (filter === 'shared_by' && shared_by) {
        return {
          messages: {
            some: {
              sender_id: shared_by,
              receiver_id: userId,
              file_id: { not: null },
            },
          },
        };
      }

      // No filter — return mine + shared with me
      return {
        OR: [
          { uploaded_by: userId },
          {
            messages: {
              some: { receiver_id: userId, file_id: { not: null } },
            },
          },
        ],
      };
    })();

    const include = {
      uploader: {
        select: {
          user_id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      messages:
        filter !== 'mine'
          ? {
              where: { receiver_id: userId },
              select: {
                sender: {
                  select: {
                    user_id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                  },
                },
                sent_at: true,
              },
              take: 1,
              orderBy: { sent_at: 'desc' as const },
            }
          : false,
    };

    const [files, total] = await Promise.all([
      this.prisma.file.findMany({
        where,
        orderBy: { created_at: 'desc' },
        skip,
        take: limit,
        include,
      }),
      this.prisma.file.count({ where }),
    ]);

    return {
      data: files,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }
}
