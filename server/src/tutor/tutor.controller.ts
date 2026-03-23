import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserService } from 'src/user/user.service';

@ApiTags('tutor')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('tutor')
@Controller('tutor')
export class TutorController {
  constructor(private userService: UserService) {}

  @Get('hello')
  @ApiOperation({ summary: 'hello tutor' })
  hello() {
    return 'Hello tutor';
  }
}
