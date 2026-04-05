import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { MessageQueryDto } from './message.dto';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma;
  }

  async send(
    sender_id: string,
    receiver_id: string,
    content: string,
    file_id?: number,
  ) {
    const allocation = await this.prisma.userAllocation.findFirst({
      where: {
        OR: [
          { tutor_id: sender_id, student_id: receiver_id },
          { tutor_id: receiver_id, student_id: sender_id },
        ],
        is_current: true,
      },
    });

    if (!allocation)
      throw new UnauthorizedException(
        'Sender and receiver have no current allocation',
      );

    return await this.prisma.message.create({
      data: {
        sender_id,
        receiver_id,
        content,
        file_id,
        sent_at: new Date(),
      },
    });
  }

  async findAll({ page = 1, limit = 10, user1_id, user2_id }: MessageQueryDto) {
    const skip = (page - 1) * limit;
    const where = {
      OR: [
        { sender_id: user1_id, receiver_id: user2_id },
        { sender_id: user2_id, receiver_id: user1_id },
      ],
    };

    const [messages, total] = await Promise.all([
      this.prisma.message.findMany({
        where,
        orderBy: { sent_at: 'desc' },
        skip,
        take: limit,
        include: {
          file: true,
        },
      }),
      this.prisma.message.count({ where }),
    ]);

    return {
      data: messages.map((m) => ({ ...m, mine: m.sender_id == user1_id })),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findAllNoPagination(user1_id: string, user2_id: string) {
    // console.log(user1_id)
    const messages = await this.prisma.message.findMany({
      where: {
        OR: [
          { sender_id: user1_id, receiver_id: user2_id },
          { sender_id: user2_id, receiver_id: user1_id },
        ],
      },
      orderBy: { sent_at: 'desc' },
    });

    // console.log(messages[0].sender_id + "\n" + user1_id + "\n" + (messages[0].sender_id == user1_id));

    return messages.map((m) => ({ ...m, mine: m.sender_id == user1_id }));
  }

  async findLast(user1_id: string, user2_id: string) {
    const result = await this.prisma.message.findFirst({
      where: {
        OR: [
          { sender_id: user1_id, receiver_id: user2_id },
          { sender_id: user2_id, receiver_id: user1_id },
        ],
      },
      orderBy: { sent_at: 'desc' },
    });

    if (result) return { ...result, mine: result.sender_id == user1_id };
    return result;
  }

  async getConversations(currentUserId: string) {
    const allocations = await this.prisma.userAllocation.findMany({
      where: {
        is_current: true,
        OR: [{ tutor_id: currentUserId }, { student_id: currentUserId }],
      },
      include: {
        tutor: { omit: { password_hash: true } },
        student: { omit: { password_hash: true } },
      },
    });

    const conversations = await Promise.all(
      allocations.map(async (a) => {
        const peerId = a.tutor_id === currentUserId ? a.student_id : a.tutor_id;
        const peer = a.tutor_id === currentUserId ? a.student : a.tutor;

        const lastMessage = await this.prisma.message.findFirst({
          where: {
            OR: [
              { sender_id: currentUserId, receiver_id: peerId },
              { sender_id: peerId, receiver_id: currentUserId },
            ],
          },
          orderBy: { sent_at: 'desc' },
        });

        const unread_count =
          lastMessage && lastMessage.sender_id !== currentUserId
            ? await this.prisma.message.count({
                where: {
                  sender_id: peerId,
                  receiver_id: currentUserId,
                  is_read: false,
                },
              })
            : 0;

        return {
          allocation_id: a.allocation_id,
          peer,
          last_message: lastMessage
            ? { ...lastMessage, mine: lastMessage.sender_id === currentUserId }
            : null,
          unread_count,
        };
      }),
    );

    // Sort by most recent message (nulls last)
    return conversations.sort((a, b) => {
      const aTime = a.last_message?.sent_at?.getTime() ?? 0;
      const bTime = b.last_message?.sent_at?.getTime() ?? 0;
      return bTime - aTime;
    });
  }
}
