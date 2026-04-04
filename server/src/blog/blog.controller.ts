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
import { BlogService } from './blog.service';
import { JwtPayload } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiTags('blog')
@Controller('blog')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class BlogController {
  constructor(private blogService: BlogService) { }

}
