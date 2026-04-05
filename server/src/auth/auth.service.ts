import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from '../user/dto/signIn.dto';
import * as bcrypt from 'bcrypt';
import { JobQueueService } from 'src/jobs/job-queue.service';

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

    this.jobQueueService.enqueue(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      console.log(
        `Hello from the background ${user.first_name} ${user.last_name}, you have signed in at ${new Date().toISOString()}`,
      );

      throw new Error('Background job failed intentionally');
    });

    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
    };
  }
}
