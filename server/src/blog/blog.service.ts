import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  async findAll() {
    return await this.prisma.blogPost.findMany({ where: {} })
  }

  async findAllUnpaginated() {
    return await this.prisma.blogPost.findMany({ where: {} })
  }

}
