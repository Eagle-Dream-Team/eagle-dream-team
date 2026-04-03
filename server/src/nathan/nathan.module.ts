import { Module } from '@nestjs/common';
import { NathanController } from './nathan.controller';
import { NathanService } from './nathan.service';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [NathanController],
  providers: [NathanService, PrismaService],
})
export class NathanModule { }
