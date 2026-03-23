import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { SignUpDto } from './dto/signUp.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma.service';
import { ChangePasswordDto } from './dto/changePassword.dto';

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
    return this.signUp({ ...dto, role: 'student' });
  }

  async findAllTutors(search?: string) {
    const users = await this.prisma.user.findMany({
      where: {
        role: 'tutor',
        ...(search && {
          OR: [
            { first_name: { contains: search, mode: 'insensitive' } },
            { last_name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      omit: { password_hash: true },
    });
    return users;
  }

  async findAllTutees(search?: string, isAllocated?: boolean) {
    const users = await this.prisma.user.findMany({
      where: {
        role: 'student',
        ...(search && {
          OR: [
            { first_name: { contains: search, mode: 'insensitive' } },
            { last_name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        }),
        ...(isAllocated !== undefined && {
          student_allocations: isAllocated
            ? { some: { is_current: true } }
            : { none: { is_current: true } },
        }),
      },
      omit: { password_hash: true },
      include: {
        student_allocations: {
          where: { is_current: true },
          include: { tutor: { omit: { password_hash: true } } },
        },
      },
    });
    return users;
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
}
