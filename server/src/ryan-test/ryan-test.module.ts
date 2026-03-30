import { Module } from '@nestjs/common';
import { RyanTestController } from './ryan-test.controller';
import { RyanTestService } from './ryan-test.service';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [RyanTestController],
  providers: [RyanTestService, PrismaService],
})
export class RyanTestModule { }
