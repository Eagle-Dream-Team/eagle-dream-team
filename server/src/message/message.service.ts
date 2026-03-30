import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'prisma.service';

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

    async findLast(sender_id: string, receiver_id: string) {
        return await this.prisma.message.findFirst({
            where: { sender_id, receiver_id },
            orderBy: { sent_at: 'desc' },
        })
    }

    async findAll(sender_id: string, receiver_id: string) {
        return await this.prisma.message.findMany({
            where: { sender_id, receiver_id },
            orderBy: { sent_at: 'desc' },
        })
    }

    async findLastMessageOfConversation(user1_id: string, user2_id: string) {
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

    async findAllConversations(user1_id: string, user2_id: string) {
        return await this.prisma.message.findMany({
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
