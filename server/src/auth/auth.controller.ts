import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SignUpDto } from '../user/dto/signUp.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SignInDto } from 'src/user/dto/signIn.dto';
import { ChangePasswordDto } from 'src/user/dto/changePassword.dto';
import * as express from 'express';

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

  @Post('forgot-password')
  @ApiOperation({ summary: 'Request a password reset link' })
  forgotPassword(@Body() body: { email: string }, @Req() req: express.Request) {
    const origin = req.headers.origin || `${req.protocol}://${req.get('host')}`;
    return this.authService.forgotPassword(body.email, origin);
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password using token from email' })
  resetPassword(@Body() body: { token: string; newPassword: string }) {
    return this.authService.resetPassword(body.token, body.newPassword);
  }
}
