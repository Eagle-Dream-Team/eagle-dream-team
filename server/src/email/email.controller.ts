import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  // Test endpoint
  @Post('test')
  test(@Body('message') message: string) {
    return this.emailService.test(message);
  }

  // Endpoint to allocate tutor
  @Post('allocate-tutor')
  async allocateTutor(
    @Body('studentEmail') studentEmail: string,
    @Body('tutorEmail') tutorEmail: string,
    @Body('tutorName') tutorName: string,
  ) {
    if (!studentEmail || !tutorEmail || !tutorName) {
      return {
        success: false,
        message: 'Missing fields: studentEmail, tutorEmail, tutorName',
      };
    }

    await this.emailService.notifyTutorAllocated(studentEmail, tutorEmail, tutorName);

    return {
      success: true,
      message: 'Tutor allocation done + emails sent',
    };
  }
}