import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Delete,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';


@ApiTags('staff')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('staff')
@Controller('staff')
export class FileController {
  constructor(private fileService: FileService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a file owned by the current user' })
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
  ) {
    return this.fileService.upload(file, req.user.user_id)
  }

  @Get(':file_id') 
  @ApiOperation({ summary: 'Get a specific file\'s metadata' })
  find (
    @Query('file_id') file_id: number,
  ) {
    return this.fileService.find(file_id)
  }
}
