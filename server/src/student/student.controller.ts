import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { StudentService } from './student.service';

@ApiTags('student')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('student')
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('my-tutor')
  @ApiOperation({ summary: 'Get current tutor for this student' })
  getMyTutor(@Req() req: any) {
    return this.studentService.getMyTutor(req.user.user_id);
  }

  @Get('overview/unread-messages')
  @ApiOperation({ summary: 'Get count of unread messages for student' })
  getUnreadMessages(@Req() req: any) {
    return this.studentService.getUnreadMessagesCount(req.user.user_id);
  }

  @Get('overview/upcoming-meetings')
  @ApiOperation({ summary: 'Get count of upcoming meetings for student' })
  getUpcomingMeetings(@Req() req: any) {
    return this.studentService.getUpcomingMeetingsCount(req.user.user_id);
  }
}
