import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { StaffController } from 'src/staff/staff.controller';
import { UserService } from 'src/user/user.service';
import { TutorController } from './tutor.controller';
import { TutorService } from './tutor.service';

@Module({
  controllers: [TutorController],
  providers: [UserService, TutorService, PrismaService],
})
export class Tutormodule {}
