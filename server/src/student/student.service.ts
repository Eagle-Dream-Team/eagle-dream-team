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

  async getUnreadMessagesCount(student_id: string) {
    const count = await this.prisma.message.count({
      where: {
        receiver_id: student_id,
        is_read: false,
      },
    });
    return { count };
  }

  async getUpcomingMeetingsCount(student_id: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const count = await this.prisma.meeting.count({
      where: {
        allocation: { student_id, is_current: true },
        scheduled_at: { gte: today },
      },
    });
    return { count };
  }
}
