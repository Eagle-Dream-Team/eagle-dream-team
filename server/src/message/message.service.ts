import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class MessageService {
    constructor(private prisma: PrismaService) {
        this.prisma = prisma
    }

    async send(sender_id: string, receiver_id: string, content: string, file_id?: string) {
        this.prisma.message.create({
            data: {
                sender_id,
                receiver_id,
                content,
                // file_id
            }
        })
    }
}
