import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [StaffController],
  providers: [UserService, PrismaService],
})
export class StaffModule {}
