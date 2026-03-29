import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserAllocation } from 'src/prisma/src/generated/prisma/client';

export interface SkippedAllocation {
  student_id: string;
  reason: string;
  current_tutor: string;
}

export interface AllocationResult {
  allocated: any[];
  skipped: SkippedAllocation[];
}

import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResult, PaginationDto } from 'src/common/dto/pagination.dto';
import { IsString, IsArray } from 'class-validator';

export class AllocateDto {
  @ApiProperty({ example: 'uuid-here' })
  tutor_id: string;

  @ApiProperty({ example: ['uuid-1', 'uuid-2'] })
  @IsArray()
  @IsString({ each: true })
  student_ids: string[];
}

export class ReallocateDto {
  @ApiProperty({ example: 'uuid-here' })
  tutor_id: string;
}

@Injectable()
export class AllocationsService {
  constructor(private prisma: PrismaService) {}

  async allocate(
    tutor_id: string,
    student_ids: string[],
    allocated_by: string,
  ): Promise<AllocationResult> {
    const tutor = await this.prisma.user.findUnique({
      where: { user_id: tutor_id },
    });
    if (!tutor) throw new NotFoundException('Tutor not found');

    const allocated: UserAllocation[] = [];
    const skipped: SkippedAllocation[] = [];

    for (const student_id of student_ids) {
      const student = await this.prisma.user.findUnique({
        where: { user_id: student_id },
        include: {
          student_allocations: {
            where: { is_current: true },
            include: { tutor: { omit: { password_hash: true } } },
          },
        },
      });

      if (!student) continue;

      const activeAllocation = student.student_allocations[0];

      if (activeAllocation) {
        skipped.push({
          student_id,
          reason: 'already_allocated',
          current_tutor: `${activeAllocation.tutor.first_name} ${activeAllocation.tutor.last_name}`,
        });
        continue;
      }

      const allocation = await this.prisma.userAllocation.create({
        data: {
          tutor: { connect: { user_id: tutor_id } },
          student: { connect: { user_id: student_id } },
          staff: { connect: { user_id: allocated_by } },
          is_current: true,
        },
      });

      allocated.push(allocation);
    }

    return { allocated, skipped };
  }

  async reallocate(student_id: string, tutor_id: string, allocated_by: string) {
    const tutor = await this.prisma.user.findUnique({
      where: { user_id: tutor_id },
    });
    if (!tutor) throw new NotFoundException('Tutor not found');

    const activeAllocation = await this.prisma.userAllocation.findFirst({
      where: { student_id, is_current: true },
    });

    if (!activeAllocation) {
      throw new NotFoundException('No active allocation found');
    }

    const [, newAllocation] = await this.prisma.$transaction([
      this.prisma.userAllocation.update({
        where: { allocation_id: activeAllocation.allocation_id },
        data: { is_current: false },
      }),

      this.prisma.userAllocation.create({
        data: {
          tutor: { connect: { user_id: tutor_id } },
          student: { connect: { user_id: student_id } },
          staff: { connect: { user_id: allocated_by } },
          is_current: true,
        },
      }),
    ]);

    return { allocation: newAllocation };
  }

  async deallocate(student_id: string) {
    const activeAllocation = await this.prisma.userAllocation.findFirst({
      where: { student_id, is_current: true },
    });

    if (!activeAllocation) {
      throw new NotFoundException('No active allocation found');
    }

    const updated = await this.prisma.userAllocation.update({
      where: { allocation_id: activeAllocation.allocation_id },
      data: { is_current: false },
    });

    return { allocation: updated };
  }

  async findAll(
    { page = 1, limit = 10 }: PaginationDto,
    filters: {
      tutor_id?: string;
      student_id?: string;
      allocated_by?: string;
      is_current?: boolean;
    },
  ): Promise<PaginatedResult<any>> {
    const skip = (page - 1) * limit;

    const where = {
      ...(filters.tutor_id && { tutor_id: filters.tutor_id }),
      ...(filters.student_id && { student_id: filters.student_id }),
      ...(filters.allocated_by && { allocated_by: filters.allocated_by }),
      ...(filters.is_current !== undefined && {
        is_current: filters.is_current,
      }),
    };

    const [allocations, total] = await Promise.all([
      this.prisma.userAllocation.findMany({
        where,
        include: {
          student: { omit: { password_hash: true } },
          tutor: { omit: { password_hash: true } },
          staff: { omit: { password_hash: true } },
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
