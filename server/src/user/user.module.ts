import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'prisma.module';
import { UserController } from './user.controller';
import { JobQueueService } from 'src/jobs/job-queue.service';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService, JobQueueService, EmailService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
