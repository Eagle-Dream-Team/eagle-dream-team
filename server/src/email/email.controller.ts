import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { EmailService } from './email.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) { }



}
