import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const [messagesLast7Days, tutors] = await Promise.all([
      this.prisma.message.count({
        where: { sent_at: { gte: sevenDaysAgo } },
      }),
      this.prisma.user.findMany({
        where: { role: 'tutor' },
        select: { user_id: true, first_name: true, last_name: true },
      }),
    ]);

    const tutorMessageCounts = await Promise.all(
      tutors.map(async (tutor) => {
        const count = await this.prisma.message.count({
          where: {
            OR: [{ sender_id: tutor.user_id }, { receiver_id: tutor.user_id }],
          },
        });
        return count;
      }),
    );

    const averageMessagesPerTutor =
      tutors.length > 0
        ? Math.round(
            tutorMessageCounts.reduce((a, b) => a + b, 0) / tutors.length,
          )
        : 0;

    return {
      messages_last_7_days: messagesLast7Days,
      average_messages_per_tutor: averageMessagesPerTutor,
      total_tutors: tutors.length,
    };
  }

  async getUnallocatedStudents() {
    const students = await this.prisma.user.findMany({
      where: {
        role: 'student',
        student_allocations: { none: { is_current: true } },
      },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        email: true,
        created_at: true,
      },
      orderBy: { created_at: 'desc' },
    });

    return { data: students, total: students.length };
  }

  async getInactiveStudents() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const twentyEightDaysAgo = new Date();
    twentyEightDaysAgo.setDate(twentyEightDaysAgo.getDate() - 28);

    const students = await this.prisma.user.findMany({
      where: { role: 'student' },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        email: true,
        student_allocations: {
          where: { is_current: true },
          select: {
            tutor: {
              select: {
                user_id: true,
                first_name: true,
                last_name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    const results = await Promise.all(
      students.map(async (student) => {
        const [last7, last28] = await this.prisma
          .$transaction([
            // 7 days
            this.prisma.message.count({
              where: {
                OR: [
                  { sender_id: student.user_id },
                  { receiver_id: student.user_id },
                ],
                sent_at: { gte: sevenDaysAgo },
              },
            }),
            this.prisma.file.count({
              where: {
                uploaded_by: student.user_id,
                created_at: { gte: sevenDaysAgo },
              },
            }),
            this.prisma.meeting.count({
              where: {
                allocation: { student_id: student.user_id },
                scheduled_at: { gte: sevenDaysAgo },
              },
            }),
            this.prisma.blogPost.count({
              where: {
                author_id: student.user_id,
                created_at: { gte: sevenDaysAgo },
              },
            }),
            // 28 days
            this.prisma.message.count({
              where: {
                OR: [
                  { sender_id: student.user_id },
                  { receiver_id: student.user_id },
                ],
                sent_at: { gte: twentyEightDaysAgo },
              },
            }),
            this.prisma.file.count({
              where: {
                uploaded_by: student.user_id,
                created_at: { gte: twentyEightDaysAgo },
              },
            }),
            this.prisma.meeting.count({
              where: {
                allocation: { student_id: student.user_id },
                scheduled_at: { gte: twentyEightDaysAgo },
              },
            }),
            this.prisma.blogPost.count({
              where: {
                author_id: student.user_id,
                created_at: { gte: twentyEightDaysAgo },
              },
            }),
          ])
          .then(
            ([msg7, file7, meet7, blog7, msg28, file28, meet28, blog28]) => [
              msg7 + file7 + meet7 + blog7,
              msg28 + file28 + meet28 + blog28,
            ],
          );

        return {
          ...student,
          tutor: student.student_allocations[0]?.tutor ?? null,
          interactions_last_7_days: last7,
          interactions_last_28_days: last28,
        };
      }),
    );

    return {
      data: results.filter(
        (s) =>
          s.interactions_last_7_days === 0 || s.interactions_last_28_days === 0,
      ),
    };
  }
}
