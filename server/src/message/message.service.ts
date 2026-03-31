import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { MaessageQueryDto } from './messages.dto';

@Injectable()
export class MessageService {
    constructor(private prisma: PrismaService) {
        this.prisma = prisma
    }

    async send(sender_id: string, receiver_id: string, content: string, file_id?: number) {
        const allocation = await this.prisma.userAllocation.findFirst({
            where: {
                OR: [
                    { tutor_id: sender_id, student_id: receiver_id },
                    { tutor_id: receiver_id, student_id: sender_id },
                ],
                is_current: true,
            }
        });

        if (!allocation) throw new UnauthorizedException('Sender and receiver have no current allocation')

        return await this.prisma.message.create({
            data: {
                sender_id,
                receiver_id,
                content,
                file_id,
                sent_at: new Date(),
            }
        })
    }

    async findAll({ page = 1, limit = 10, user1_id, user2_id }: MaessageQueryDto) {
        const skip = (page - 1) * limit;
        const where = {
            OR: [
                { sender_id: user1_id, receiver_id: user2_id },
                { sender_id: user2_id, receiver_id: user1_id },
            ]
        };

        const [messages, total] = await Promise.all([
            this.prisma.message.findMany({
                where,
                orderBy: { sent_at: 'desc' },
                skip,
                take: limit
            }),
            this.prisma.message.count({ where }),
        ]);

        return {
            data: messages,
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }

    async findAllNoPagination(user1_id: string, user2_id: string) {
        return await this.prisma.message.findMany({
            where: {
                OR: [
                    { sender_id: user1_id, receiver_id: user2_id },
                    { sender_id: user2_id, receiver_id: user1_id },
                ]
            },
            orderBy: { sent_at: 'desc' },
        });
    }

    async findLast(user1_id: string, user2_id: string) {
        return await this.prisma.message.findFirst({
            where: {
                OR: [
                    { sender_id: user1_id, receiver_id: user2_id },
                    { sender_id: user2_id, receiver_id: user1_id },
                ]
            },
            orderBy: { sent_at: 'desc' },
        })
    }
}
