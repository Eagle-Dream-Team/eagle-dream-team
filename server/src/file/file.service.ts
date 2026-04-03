import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SupabaseClient } from '@supabase/supabase-js';
import { env } from 'process';



@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma;
  }

  supabase = new SupabaseClient(process.env.SUPABASE_PROJECT_URL ?? "", process.env.SUPABASE_SECRET_KEY ?? "");

  async upload(file: Express.Multer.File, filename: string, uploaded_by: string) {
    console.log(file)
    const { error } = await this.supabase
      .storage
      .from('files')
      .upload(uploaded_by + '/' + filename, file.stream, {
        contentType: file.mimetype
      })

    if (error) throw new BadRequestException(error.message);

    const publicUrl = this.supabase
      .storage
      .from('files')
      .getPublicUrl(filename).data.publicUrl;

    return await this.prisma.file.create({
      data: {
        title: filename,
        file_url: publicUrl,
        type: file.mimetype,
        uploaded_by,
      }
    })
  }

  async find(file_id: number) {
    return await this.prisma.file.findFirst({
      where: { file_id }
    })
  }

  async findAll() {
    return await this.prisma.file.findMany({
      where: {}
    })
  }
}
