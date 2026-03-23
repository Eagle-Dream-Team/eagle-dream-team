import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SignUpDto } from '../user/dto/signUp.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SignInDto } from 'src/user/dto/signIn.dto';
import { ChangePasswordDto } from 'src/user/dto/changePassword.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('sign-up')
  @ApiOperation({ summary: 'Register a new user' })
  signUp(@Body() dto: SignUpDto) {
    return this.userService.signUp(dto);
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'Sign in and get access token to authorise user' })
  signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Post('change-password')
  @ApiOperation({ summary: 'Change user password' })
  changePassword(@Body() dto: ChangePasswordDto) {
    return this.userService.changePassword(dto);
  }

  @Post('sign-out')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sign out' })
  signOut() {
    return { success: true, message: 'Signed out successfully' };
  }
}
