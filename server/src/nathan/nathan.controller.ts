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
import { NathanService } from './nathan.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiTags('nathan')
@Controller('nathan')
export class NathanController {
  constructor(private nathanService: NathanService) { }



}
