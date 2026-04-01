import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getMyTutor(student_id: string) {
    const allocation = await this.prisma.userAllocation.findFirst({
      where: { student_id, is_current: true },
      include: {
        tutor: { omit: { password_hash: true } },
      },
    });

    if (!allocation) throw new NotFoundException('No active tutor found');

    return allocation;
  }
}
