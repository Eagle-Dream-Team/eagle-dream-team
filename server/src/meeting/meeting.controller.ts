import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { MeetingService } from './meeting.service';
import {
  CreateMeetingDto,
  MeetingQueryDto,
  UpdateMeetingDto,
} from './meeting.dto';

@ApiTags('meetings')
@Controller('meetings')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class MeetingController {
  constructor(private meetingService: MeetingService) {}

  @Post()
  @Roles('tutor')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Create a meeting (tutor only)' })
  create(@Body() dto: CreateMeetingDto, @Req() req: any) {
    return this.meetingService.create(req.user.user_id, dto);
  }

  @Patch(':id')
  @Roles('tutor')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Update a meeting (tutor only)' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMeetingDto,
    @Req() req: any,
  ) {
    return this.meetingService.update(id, req.user.user_id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all meetings for the current user' })
  findAll(@Query() query: MeetingQueryDto, @Req() req: any) {
    return this.meetingService.findAll(req.user.user_id, req.user.role, query);
  }
}
