import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('blog')
@Controller('blog')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('/post')
  @ApiOperation({ summary: 'Post a new blog authored by the current user' })
  postBlog(@Body() data: { title: string; content: string }, @Req() req: any) {
    return this.blogService.postBlog(
      data.title,
      data.content,
      req.user.user_id,
    );
  }

  @Patch(':post_id')
  @ApiOperation({ summary: 'Edit an existing blog post' })
  editBlog(
    @Param('post_id') post_id: string,
    @Body() data: { title: string; content: string },
    @Req() req: any,
  ) {
    return this.blogService.editBlog(
      +post_id,
      data.title,
      data.content,
      req.user.user_id,
    );
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all blogs paginated' })
  findAll(
    @Query() query: PaginationDto,
    @Query('author_id') author_id?: string,
  ) {
    return this.blogService.findAll(query, author_id);
  }

  @Get('all/unpaginated')
  @ApiOperation({ summary: 'Get all blogs unpaginated' })
  findAllUnpaginated(
    @Query() query: PaginationDto,
    @Query('author_id') author_id?: string,
  ) {
    return this.blogService.findAllUnpaginated(query, author_id);
  }

  @Get('authors')
  @ApiOperation({ summary: 'Get all users who have authored blog posts' })
  getAuthors(@Query() query: PaginationDto) {
    return this.blogService.getAuthors(query);
  }

  @Get(':post_id')
  @ApiOperation({ summary: 'Get a single blog post' })
  findOne(@Param('post_id') post_id: string) {
    return this.blogService.findOne(+post_id);
  }
}
