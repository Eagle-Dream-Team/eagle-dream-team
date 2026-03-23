import {
  Controller,
  Get,
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
}
