import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  async findAll({ page = 1, limit = 10 }: PaginationDto) {
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      this.prisma.blogPost.findMany({
        where: {},
        orderBy: { published_at: 'desc' },
        skip,
        take: limit
      }),
      this.prisma.blogPost.count({ where: {} }),
    ]);

    const summaryLength = 50;
    return {
      data: blogs.map(m => ({
        ...m,
        summary: (m.content.slice(0, summaryLength).trim() + (
          m.content.length > summaryLength ? "..." : "")
        )
      })),

      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    }
  }

  async findAllUnpaginated() {
    const blogs = await this.prisma.blogPost.findMany({ where: {}, orderBy: { published_at: 'desc' } })

    const summaryLength = 50;
    return blogs.map(m => ({
      ...m,
      summary: (m.content.slice(0, summaryLength).trim() + (
        m.content.length > summaryLength ? "..." : "")
      )
    }))

  }

  async postBlog(title: string, content: string, author_id: string) {
    return await this.prisma.blogPost.create({
      data: {
        title,
        content,
        author_id,
        published_at: new Date(),
        is_published: true,
      }
    })
  }
}
