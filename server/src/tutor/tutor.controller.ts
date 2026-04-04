import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserService } from '../user/user.service';
import { TutorService } from './tutor.service';
import { TutorStudentsQueryDto } from './dto/TutorStudentsQueryDto.dto';

@ApiTags('tutor')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('tutor')
@Controller('tutor')
export class TutorController {
  constructor(
    private userService: UserService,
    private tutorService: TutorService,
  ) {}

  @Get('hello')
  @ApiOperation({ summary: 'hello tutor' })
  hello() {
    return 'Hello tutor';
  }

  @Get('students')
  @ApiOperation({ summary: 'Get all students by their most recent allocation' })
  getStudents(@Query() query: TutorStudentsQueryDto, @Req() req: any) {
    const { is_current, ...pagination } = query;
    return this.tutorService.getStudents(
      req.user.user_id,
      pagination,
      is_current,
    );
  }
}
