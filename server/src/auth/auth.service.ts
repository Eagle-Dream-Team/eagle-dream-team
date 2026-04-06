import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from '../user/dto/signIn.dto';
import * as bcrypt from 'bcrypt';
import { JobQueueService } from 'src/jobs/job-queue.service';
import { EmailService } from 'src/email/email.service';

export type JwtPayload = {
  sub: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
};

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private jobQueueService: JobQueueService,
    private emailService: EmailService,
  ) {}

  async signIn(dto: SignInDto) {
    const user = await this.userService.findByEmail(dto.email.toLowerCase());

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const valid = await bcrypt.compare(dto.password, user.password_hash);

    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {
      sub: user.user_id,
      email: user.email,
      role: user.role,
      first_name: user.first_name,
      last_name: user.last_name,
    };

    // this.jobQueueService.enqueue(async () => {
    //   this.emailService.sendEmail(
    //     user.email,
    //     'Welcome Back to eTutoring!',
    //     `Hello ${user.first_name},

    //     Welcome back to eTutoring! We're glad to see you again. If you need any assistance, feel free to reach out.

    //     Best regards,
    //     The eTutoring Team`,
    //   );
    // });

    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
    };
  }

  async forgotPassword(email: string, origin: string) {
    const user = await this.userService.findByEmail(email.toLowerCase());

    if (user) {
      const token = this.jwtService.sign(
        { sub: user.user_id, email: user.email, type: 'password-reset' },
        { expiresIn: '1h' },
      );
      const resetLink = `${origin}/auth/reset-password?token=${token}`;
      await this.emailService.sendEmail(
        user.email,
        'eTutoring: Password Reset Request',
        `Hello ${user.first_name},\n\nClick the link below to reset your password. It expires in 1 hour.\n\n${resetLink}\n\nIf you did not request this, ignore this email.\n\nRegards,\nThe eTutoring Team`,
      );
    }

    return { message: 'If that email exists, a reset link has been sent.' };
  }

  async resetPassword(token: string, newPassword: string) {
    let payload: any;
    try {
      payload = this.jwtService.verify(token);
    } catch {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    if (payload.type !== 'password-reset') {
      throw new UnauthorizedException('Invalid token type');
    }

    const hash = await bcrypt.hash(newPassword, 10);
    await this.userService.updatePassword(payload.sub, hash);

    return { message: 'Password updated successfully.' };
  }
}
