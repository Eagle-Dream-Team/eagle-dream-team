import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { RyanTestService } from './ryan-test.service';
import { JwtPayload } from 'src/auth/auth.service';
import { AllocateStudentToTutorDto } from './dto/allocateStudentToTutor.dto';
import { AllocateStudentsToTutorDto } from './dto/allocateStudentsToTutor.dto copy';

@ApiTags('ryan-test')
@Controller('ryan-test')
export class RyanTestController {
  constructor(private ryanTestService: RyanTestService) { }


  @Post('allocate')
  @ApiOperation({ summary: 'Allocate a student to a tutor' })
  allocateStudentToTutor(
    @Query('studentId') studentId: string,
    @Query('tutorId') tutorId: string,
    @Req() { user }: Request & { user: JwtPayload },
  ) {
    return this.ryanTestService.allocateStudentToTutor({ studentId: studentId, tutorId: tutorId, allocatedBy: "f4def9af-5c79-4db4-9be1-95495f5e4c55" });
  }

  @Post('allocateBulk')
  @ApiOperation({ summary: 'Allocate multiple students to a tutor' })
  allocateStudentsToTutor(@Body() dto: AllocateStudentsToTutorDto) {
    return this.ryanTestService.allocateStudentsToTutor({ ...dto, allocatedBy: "f4def9af-5c79-4db4-9be1-95495f5e4c55" });
  }

  @Get('allocations')
  @ApiOperation({ summary: 'List all student-tutor allocations' })
  findAllAllocations() {
    return this.ryanTestService.findAllAllocations();
  }

  @Get('users')
  @ApiOperation({ summary: 'List all users' })
  findAllUsers() {
    return this.ryanTestService.findAllUsers();
  }

  @Get('students')
  @ApiOperation({ summary: 'List all students' })
  findAllStudents() {
    return this.ryanTestService.findAllStudents();
  }
}
