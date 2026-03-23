import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserService } from '../user/user.service';
import { SignUpDto } from '../user/dto/signUp.dto';

@ApiTags('staff')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('staff')
@Controller('staff')
export class StaffController {
  constructor(private userService: UserService) {}

  @Post('users/tutor')
  @ApiOperation({ summary: 'Register a tutor' })
  createTutor(@Body() dto: SignUpDto) {
    return this.userService.createTutor(dto);
  }

  @Post('users/student')
  @ApiOperation({ summary: 'Register a student' })
  createStudent(@Body() dto: SignUpDto) {
    return this.userService.createStudent(dto);
  }

  @Get('users/tutors')
  @ApiOperation({ summary: 'List all tutors' })
  @ApiQuery({ name: 'search', required: false })
  findAllTutors(@Query('search') search?: string) {
    return this.userService.findAllTutors(search);
  }

  @Get('users/students')
  @ApiOperation({ summary: 'List all students' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'is_allocated', required: false })
  findAllTutees(
    @Query('search') search?: string,
    @Query('is_allocated') isAllocated?: string,
  ) {
    const allocated =
      isAllocated === 'true'
        ? true
        : isAllocated === 'false'
          ? false
          : undefined;
    return this.userService.findAllTutees(search, allocated);
  }

  @Get('users/:id')
  @ApiOperation({ summary: 'Get a single user' })
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Patch('users/:id')
  @ApiOperation({ summary: 'Update a user' })
  update(@Param('id') id: string, @Body() dto: Partial<SignUpDto>) {
    return this.userService.updateUser(id, dto);
  }
}
