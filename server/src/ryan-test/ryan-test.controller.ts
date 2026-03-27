import {
  Body,
  Controller,
  Get,
  Patch,
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
    return this.ryanTestService.allocateStudentToTutor({ studentId: studentId, tutorId: tutorId, allocatedBy: "f4def9af-5c79-4db4-9be1-95495f5e4c55" })
  }

  @Post('allocateBulk')
  @ApiOperation({ summary: 'Allocate multiple students to a tutor' })
  allocateStudentsToTutor(@Body() dto: AllocateStudentsToTutorDto) {
    return this.ryanTestService.allocateStudentsToTutor({ ...dto, allocatedBy: "f4def9af-5c79-4db4-9be1-95495f5e4c55" })
  }

  @Get('allocations')
  @ApiOperation({ summary: 'List all student-tutor allocations' })
  findAllAllocations() {
    return this.ryanTestService.findAllAllocations()
  }

  @Get('allocationsGrouped')
  @ApiOperation({ summary: 'List all student allocations grouped in arrays in an object indexed by tutor IDs' })
  findAllAllocationsDetailed() {
    return this.ryanTestService.findAllAllocations(true)
  }

  @Get('users')
  @ApiOperation({ summary: 'List all users' })
  findAllUsers() {
    return this.ryanTestService.findAllUsers()
  }

  @Get('students')
  @ApiOperation({ summary: 'List all students' })
  findAllStudents() {
    return this.ryanTestService.findAllStudents()
  }

  @Get('allocationsByUserId')
  @ApiOperation({ summary: 'List all allocations (past and present) that involve a user (tutor or student)' })
  findAllAllocationsByUserId(@Query('user_id') user_id: string) {
    return this.ryanTestService.findAllAllocationsByUserId(user_id)
  }

  @Get('currentAllocationsByUserId')
  @ApiOperation({ summary: 'List all currently active allocations that involve a user (tutor or student)' })
  findAllCurrentAllocationsByUserId(@Query('user_id') user_id: string) {
    return this.ryanTestService.findAllCurrentAllocationsByUserId(user_id)
  }

  @Get('myAllocations')
  @ApiOperation({ summary: 'List all of the currently logged in user\'s allocations (past and present) that involve a user (tutor or student)' })
  findAllUserAllocations(@Req() { user }: Request & { user: JwtPayload }) {
    return this.ryanTestService.findAllAllocationsByUserId(user.sub)
  }

  @Get('myCurrentAllocations')
  @ApiOperation({ summary: 'List all of the currently logged in user\'s currently active allocations that involve a user (tutor or student)' })
  findAllUserCurrentAllocations(@Req() { user }: Request & { user: JwtPayload }) {
    return this.ryanTestService.findAllCurrentAllocationsByUserId(user.sub)
  }

  @Patch('deactivateAllocation')
  @ApiOperation({ summary: 'Turn a current allocation into a past allocation' })
  deactivateAllocation(@Query('allocation_id') allocation_id: number) {
    return this.ryanTestService.deactivateAllocation(allocation_id * 1)
  }

}
