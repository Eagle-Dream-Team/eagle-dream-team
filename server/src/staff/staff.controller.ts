import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Delete,
  Req,
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
import { PaginationDto } from 'src/common/dto/pagination.dto';
import {
  AllocateDto,
  AllocationsService,
  ReallocateDto,
} from './allocation.service';

@ApiTags('staff')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('staff')
@Controller('staff')
export class StaffController {
  constructor(
    private userService: UserService,
    private allocationsService: AllocationsService,
  ) {}

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
  findAllTutors(
    @Query('search') search?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.userService.findAllTutors(
      search,
      Number(page) || 1,
      Number(limit) || 10,
    );
  }

  @Get('users/students')
  @ApiOperation({ summary: 'List all students' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'is_allocated', required: false })
  findAllTutees(
    @Query() query: PaginationDto,
    @Query('is_allocated') isAllocated?: string,
  ) {
    const allocated =
      isAllocated === 'true'
        ? true
        : isAllocated === 'false'
          ? false
          : undefined;
    return this.userService.findAllTutees(query, allocated);
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

  // --- Allocations ---

  @Post('allocations')
  @ApiOperation({ summary: 'Allocate one or many students to a tutor' })
  allocate(@Body() dto: AllocateDto, @Req() req: any) {
    console.log('req.user:', req.user);

    return this.allocationsService.allocate(
      dto.tutor_id,
      dto.student_ids,
      req.user.user_id,
    );
  }

  @Patch('allocations/:student_id')
  @ApiOperation({ summary: 'Reallocate a student to a new tutor' })
  reallocate(
    @Param('student_id') student_id: string,
    @Body() dto: ReallocateDto,
    @Req() req: any,
  ) {
    return this.allocationsService.reallocate(
      student_id,
      dto.tutor_id,
      req.user.user_id,
    );
  }

  @Delete('allocations/:student_id')
  @ApiOperation({ summary: 'Remove active tutor from a student' })
  deallocate(@Param('student_id') student_id: string) {
    return this.allocationsService.deallocate(student_id);
  }

  @Get('allocations')
  @ApiOperation({ summary: 'List all allocations' })
  @ApiQuery({ name: 'tutor_id', required: false })
  @ApiQuery({ name: 'student_id', required: false })
  @ApiQuery({ name: 'allocated_by', required: false })
  @ApiQuery({ name: 'is_current', required: false })
  findAllAllocations(
    @Query() query: PaginationDto,
    @Query('tutor_id') tutor_id?: string,
    @Query('student_id') student_id?: string,
    @Query('allocated_by') allocated_by?: string,
    @Query('is_current') is_current?: string,
  ) {
    return this.allocationsService.findAll(query, {
      tutor_id,
      student_id,
      allocated_by,
      is_current:
        is_current === 'true'
          ? true
          : is_current === 'false'
            ? false
            : undefined,
    });
  }
}
