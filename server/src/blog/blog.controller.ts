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
import { PaginationDto } from 'src/common/dto/pagination.dto';


@ApiTags('blog')
@Controller('blog')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class BlogController {
  constructor(private blogService: BlogService) { }
   @Post('/post')
  @ApiOperation({ summary: 'Post a new blog authored by the current user' })
  postBlog(
    @Body() data: any,
    @Req() req: any,
    @Query('title') title: string,
    @Query('content') content: string,
  ) {
    return this.blogService.postBlog(
      title ?? data.title,
      content ?? data.content,
      req.user.user_id,
    )
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all blogs' })
  findAll(@Query() query: PaginationDto) {
    return this.blogService.findAll(query)
  }

  @Get('all/unpaginated')
  @ApiOperation({ summary: 'Get all blogs' })
  findAllUnpaginated() {
    return this.blogService.findAllUnpaginated()
  }

}
