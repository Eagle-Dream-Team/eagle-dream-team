import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma.module';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  providers: [PrismaModule, MessageService],
  controllers: [MessageController],
})
export class UserModule {
    
}
