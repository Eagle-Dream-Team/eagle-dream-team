import {
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { RyanTestService } from './ryan-test.service';

@ApiTags('ryan-test')
@Controller('ryan-test')
export class RyanTestController {
  constructor(private ryanTestService: RyanTestService) {}

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

  @Post('allocate')
  @ApiOperation({ summary: 'Allocate a student to a tutor' })
  allocateStudentToTutor(
        @Query('studentId') studentId: string,
        @Query('tutorId') tutorId: string,
  ) {
    return this.ryanTestService.allocateStudentToTutor({studentId: studentId, tutorId: tutorId, allocatedBy: "WIP ID"});
  }
}
