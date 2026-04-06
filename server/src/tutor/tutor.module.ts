import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { StaffController } from 'src/staff/staff.controller';
import { UserService } from 'src/user/user.service';
import { TutorController } from './tutor.controller';
import { TutorService } from './tutor.service';
import { JobsModule } from 'src/jobs/jobs.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [JobsModule],

  controllers: [TutorController],
  providers: [UserService, TutorService, PrismaService, EmailService],
})
export class Tutormodule {}
