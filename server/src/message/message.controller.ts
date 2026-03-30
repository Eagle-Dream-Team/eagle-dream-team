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
} from '@nestjs/swagger';
import { MessageService } from './message.service';
import { JwtPayload } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('message')
@Controller('message')
@UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(private messageService: MessageService) { }

}
