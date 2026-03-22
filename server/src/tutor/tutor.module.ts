import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { StaffController } from 'src/staff/staff.controller';
import { UserService } from 'src/user/user.service';
import { TutorController } from './tutor.controller';

@Module({
  controllers: [TutorController],
  providers: [UserService, PrismaService],
})
export class Tutormodule {}
