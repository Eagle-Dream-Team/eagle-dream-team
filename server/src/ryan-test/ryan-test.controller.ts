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
  findAllTutors() {
    return this.ryanTestService.findAllUsers();
  }
}
