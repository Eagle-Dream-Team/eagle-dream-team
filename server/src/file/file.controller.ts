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
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileQueryDto } from './file.dto';

@ApiTags('file')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary: 'Upload a file under the ownership of the current user',
  })
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
    @Body() body: any,
  ) {
    if (!body.title)
      throw new BadRequestException('No title for file was provided');
    return this.fileService.upload(file, body.title, req.user.user_id);
  }

  @Post('upload/duplicate')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary: 'Upload a file under the ownership of the current user',
  })
  uploadDuplicate(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
    @Body() body: any,
  ) {
    if (!body.title)
      throw new BadRequestException('No title for file was provided');
    return this.fileService.upload(file, body.title, req.user.user_id, true);
  }

  @Get(':file_id')
  @ApiOperation({ summary: "Get a specific file's metadata" })
  find(@Query('file_id') file_id: number) {
    return this.fileService.find(file_id);
  }

  @Get('all/unpaginated')
  @ApiOperation({ summary: "Get all file's metadata" })
  findAll() {
    return this.fileService.findAll();
  }

  @Get()
  @ApiOperation({
    summary:
      'Get files for current user — mine, shared with me, or shared by a specific user',
  })
  findUserFiles(@Query() query: FileQueryDto, @Req() req: any) {
    return this.fileService.findUserFiles(req.user.user_id, query);
  }
}
