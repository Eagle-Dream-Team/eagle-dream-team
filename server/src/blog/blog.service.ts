import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma;
  }

  async findAll(
    { page = 1, limit = 10, search }: PaginationDto,
    author_id?: string,
  ) {
    const skip = (page - 1) * limit;

    const where = {
      ...(author_id && { author_id }),
      ...(search && {
        title: { contains: search, mode: 'insensitive' as const },
      }),
    };

    const [blogs, total] = await Promise.all([
      this.prisma.blogPost.findMany({
        where,
        orderBy: { published_at: 'desc' },
        skip,
        take: limit,
        include: {
          author: {
            select: {
              user_id: true,
              first_name: true,
              last_name: true,
              role: true,
            },
          },
        },
      }),
      this.prisma.blogPost.count({ where }),
    ]);

    const summaryLength = 150;
    const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

    return {
      data: blogs.map((m) => ({
        ...m,
        summary:
          stripHtml(m.content).slice(0, summaryLength).trim() +
          (stripHtml(m.content).length > summaryLength ? '...' : ''),
      })),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findAllUnpaginated({ search }: PaginationDto, author_id?: string) {
    const where = {
      ...(author_id && { author_id }),
      ...(search && {
        title: { contains: search, mode: 'insensitive' as const },
      }),
    };

    const blogs = await this.prisma.blogPost.findMany({
      where,
      orderBy: { published_at: 'desc' },
      include: {
        author: {
          select: {
            user_id: true,
            first_name: true,
            last_name: true,
            role: true,
          },
        },
      },
    });

    const summaryLength = 150;
    const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

    return blogs.map((m) => ({
      ...m,
      summary:
        stripHtml(m.content).slice(0, summaryLength).trim() +
        (stripHtml(m.content).length > summaryLength ? '...' : ''),
    }));
  }

  async findOne(post_id: number) {
    const post = await this.prisma.blogPost.findUnique({
      where: { post_id },
      include: {
        author: {
          select: {
            user_id: true,
            first_name: true,
            last_name: true,
            role: true,
          },
        },
      },
    });

    if (!post) throw new NotFoundException('Blog post not found');

    return post;
  }

  async postBlog(title: string, content: string, author_id: string) {
    return await this.prisma.blogPost.create({
      data: {
        title,
        content,
        author_id,
        published_at: new Date(),
        is_published: true,
      },
    });
  }

  async editBlog(
    post_id: number,
    title: string,
    content: string,
    author_id: string,
  ) {
    const post = await this.prisma.blogPost.findUnique({ where: { post_id } });

    if (!post) throw new NotFoundException('Blog post not found');
    if (post.author_id !== author_id)
      throw new ForbiddenException('You are not the author of this post');

    return await this.prisma.blogPost.update({
      where: { post_id },
      data: { title, content },
    });
  }

  async getAuthors({ page = 1, limit = 10, search }: PaginationDto) {
    const skip = (page - 1) * limit;

    const where = {
      blog_posts: { some: {} },
      ...(search && {
        OR: [
          { first_name: { contains: search, mode: 'insensitive' as const } },
          { last_name: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [authors, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        select: {
          user_id: true,
          first_name: true,
          last_name: true,
          role: true,
        },
        skip,
        take: limit,
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: authors,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }
}
