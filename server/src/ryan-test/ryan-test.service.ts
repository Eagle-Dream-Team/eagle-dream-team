import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class RyanTestService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  async findAllUsers() {
    const users = await this.prisma.user.findMany({
      omit: { password_hash: true },
    });
    
    return users
  }

  async findAllStudents() {
    const students = await this.prisma.user.findMany({
        where: { role: "student"},
        omit: { password_hash: true },
    })

    return students
  }
}
