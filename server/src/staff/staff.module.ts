import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from 'prisma.service';
import { AllocationsService } from './allocation.service';
import { ReportsService } from './reports.service';
import { JobQueueService } from 'src/jobs/job-queue.service';

@Module({
  controllers: [StaffController],
  providers: [
    UserService,
    PrismaService,
    AllocationsService,
    ReportsService,
    JobQueueService,
  ],
})
export class StaffModule {}
