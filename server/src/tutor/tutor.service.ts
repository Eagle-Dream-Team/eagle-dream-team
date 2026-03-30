// src/tutor/tutor.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { PaginatedResult, PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class TutorService {
  constructor(private prisma: PrismaService) {}

  async getStudents(
    tutor_id: string,
    { page = 1, limit = 10, search }: PaginationDto,
    is_current?: boolean,
  ): Promise<PaginatedResult<any>> {
    const skip = (page - 1) * limit;

    const where = {
      tutor_id,
      ...(is_current !== undefined && { is_current }),
      ...(search && {
        student: {
          OR: [
            { first_name: { contains: search, mode: 'insensitive' as const } },
            { last_name: { contains: search, mode: 'insensitive' as const } },
            { email: { contains: search, mode: 'insensitive' as const } },
          ],
        },
      }),
    };

    const [allocations, total] = await Promise.all([
      this.prisma.userAllocation.findMany({
        where,
        include: {
          student: { omit: { password_hash: true } },
        },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.userAllocation.count({ where }),
    ]);

    return {
      data: allocations,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }
}
