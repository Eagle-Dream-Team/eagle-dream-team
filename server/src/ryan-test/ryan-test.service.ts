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
        allocationsByTutorIds[a.tutor_id] = [{...a, tutor_id: undefined}]
      } else {
        allocationsByTutorIds[a.tutor_id].push({...a, tutor_id: undefined})
      }
    })

    return allocationsByTutorIds

  }

  async allocateStudentToTutor(dto: AllocateStudentToTutorDto) {
    const allocation = await this.prisma.userAllocation.create({
      data: {
        student_id: dto.studentId,
        tutor_id: dto.tutorId,
        allocated_by: dto.allocatedBy,
      },
    });

    return allocation
  }

  async allocateStudentsToTutor(dto: AllocateStudentsToTutorDto) {
    let allocations: any[] = [];
    dto.studentIds.forEach(sId => allocations.push({
      student_id: sId,
      tutor_id: dto.tutorId,
      allocated_by: dto.allocatedBy,
    }));

    const allocation = await this.prisma.userAllocation.createMany({
      data: [...allocations],
    });

    return allocation
  }
}
