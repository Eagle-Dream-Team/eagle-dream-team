import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { SignUpDto } from './dto/signUp.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma.service';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { PaginatedResult, PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: SignUpDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const password_hash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLocaleLowerCase(),
        password_hash,
        first_name: dto.firstName,
        last_name: dto.lastName,
        role: dto.role,
      },
    });

    const { password_hash: _, ...result } = user;
    return result;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email.toLocaleLowerCase(),
      },
    });
  }

  async changePassword(dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLocaleLowerCase() },
    });

    if (!user) throw new NotFoundException('User not found');

    const password_hash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { email: dto.email.toLocaleLowerCase() },
      data: { password_hash },
    });

    return { success: true, message: 'Password changed successfully' };
  }

  async findById(user_id: string) {
    const user = await this.prisma.user.findUnique({ where: { user_id } });
    if (!user) throw new NotFoundException('User not found');
    const { password_hash: _, ...result } = user;
    return result;
  }

  async createTutor(dto: SignUpDto) {
    return this.signUp({ ...dto, role: 'tutor' });
  }

  async createStudent(dto: SignUpDto) {
    const student = await this.signUp({ ...dto, role: 'student' });

    if (dto.tutor_id) {
      const tutor = await this.prisma.user.findUnique({
        where: { user_id: dto.tutor_id, role: 'tutor' },
      });

      if (!tutor) throw new NotFoundException('Tutor not found');

      await this.prisma.userAllocation.create({
        data: {
          student_id: student.user_id,
          tutor_id: dto.tutor_id,
          allocated_by: dto.tutor_id,
          is_current: true,
        },
      });
    }

    return student;
  }

  async findAllTutors(search?: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const where = {
      role: 'tutor' as const,
      ...(search && {
        OR: [
          { first_name: { contains: search, mode: 'insensitive' as const } },
          { last_name: { contains: search, mode: 'insensitive' as const } },
          { email: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        omit: { password_hash: true },
        include: {
          tutor_allocations: {
            where: { is_current: true },
          },
        },
        skip,
        take: limit,
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findAllTutees(
    { page = 1, limit = 10, search }: PaginationDto,
    isAllocated?: boolean,
  ): Promise<PaginatedResult<any>> {
    const skip = (page - 1) * limit;

    const where = {
      role: 'student' as const,
      ...(search && {
        OR: [
          { first_name: { contains: search, mode: 'insensitive' as const } },
          { last_name: { contains: search, mode: 'insensitive' as const } },
          { email: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
      ...(isAllocated !== undefined && {
        student_allocations: isAllocated
          ? { some: { is_current: true } }
          : { none: { is_current: true } },
      }),
    };

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        omit: { password_hash: true },
        include: {
          student_allocations: {
            where: { is_current: true },
            include: { tutor: { omit: { password_hash: true } } },
          },
        },
        skip,
        take: limit,
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async updateUser(user_id: string, dto: Partial<SignUpDto>) {
    const user = await this.prisma.user.findUnique({ where: { user_id } });
    if (!user) throw new NotFoundException('User not found');

    const updated = await this.prisma.user.update({
      where: { user_id },
      data: {
        ...(dto.firstName && { first_name: dto.firstName }),
        ...(dto.lastName && { last_name: dto.lastName }),
        ...(dto.email && { email: dto.email.toLocaleLowerCase() }),
      },
      omit: { password_hash: true },
    });
    return updated;
  }

  async updatePassword(userId: string, hashedPassword: string) {
    await this.prisma.user.update({
      where: { user_id: userId },
      data: { password_hash: hashedPassword },
    });
  }
}
