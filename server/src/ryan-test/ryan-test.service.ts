import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { AllocateStudentToTutorDto } from './dto/allocateStudentToTutor.dto'
import { AllocateStudentsToTutorDto } from './dto/allocateStudentsToTutor.dto copy';

@Injectable()
export class RyanTestService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  async findAllUsers() {
    const users = await this.prisma.user.findMany({
      where: {},
      omit: { password_hash: true },
    });

    return users
  }

  async findAllStudents() {
    const students = await this.prisma.user.findMany({
      where: { role: "student" },
      omit: { password_hash: true },
    })

    return students
  }

  async findAllAllocations(grouped = false, current = false) {
    const allocations = await this.prisma.userAllocation.findMany({
      where: {
      }
    });

    if (!grouped) {
      return allocations
    }

    const allocationsByTutorIds: any = {}
    allocations.forEach(a => {
      if (!allocationsByTutorIds[a.tutor_id]) {
        allocationsByTutorIds[a.tutor_id] = [{ ...a, tutor_id: undefined }]
      } else {
        allocationsByTutorIds[a.tutor_id].push({ ...a, tutor_id: undefined })
      }
    })

    return allocationsByTutorIds
  }

  async findAllAllocationsByUserId(user_id: any) {
    const allocations = await this.prisma.userAllocation.findMany({
      where: {
        OR: [
          { tutor_id: user_id },
          { student_id: user_id },
        ]
      }
    });

    return allocations
  }

  async findAllCurrentAllocationsByUserId(user_id: any) {
    const allocations = await this.prisma.userAllocation.findMany({
      where: {
        OR: [
          { tutor_id: user_id, is_current: true },
          { student_id: user_id, is_current: true },
        ],
      }
    });

    return allocations
  }

  async allocateStudentToTutor(dto: AllocateStudentToTutorDto) {
    const [_, allocation] = await this.prisma.$transaction([
      this.prisma.userAllocation.updateMany({
        where: { student_id: dto.studentId },
        data: { is_current: false },
      }),

      this.prisma.userAllocation.create({
        data: {
          student_id: dto.studentId,
          tutor_id: dto.tutorId,
          allocated_by: dto.allocatedBy,
        },
      }),
    ]);

    return allocation
  }

  async allocateStudentsToTutor(dto: AllocateStudentsToTutorDto) {
    let allocations: any[] = [];

    dto.studentIds.forEach(sId => allocations.push({
      student_id: sId,
      tutor_id: dto.tutorId,
      allocated_by: dto.allocatedBy,
    }));

    const result = await this.prisma.$transaction(async (tx) => {
      for (let i = 0; i < allocations.length; i++) {
        const a = allocations[i];
        await tx.userAllocation.updateMany({
          where: { student_id: a.student_id },
          data: { is_current: false },
        })

        await tx.userAllocation.create({
          data: a
        })
      };
    });

    return result
  }

  async deactivateAllocation(allocation_id: number) {
    const result = await this.prisma.userAllocation.update({
      where: { allocation_id: allocation_id },
      data: { is_current: false }
    })
    return result
  }
}
