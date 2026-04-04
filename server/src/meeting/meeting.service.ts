import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import {
  CreateMeetingDto,
  MeetingQueryDto,
  UpdateMeetingDto,
} from './meeting.dto';

@Injectable()
export class MeetingService {
  constructor(private prisma: PrismaService) {}

  private readonly include = {
    allocation: {
      include: {
        student: { omit: { password_hash: true } },
        tutor: { omit: { password_hash: true } },
      },
    },
    creator: { omit: { password_hash: true } },
  };

  async create(created_by: string, dto: CreateMeetingDto) {
    const allocation = await this.prisma.userAllocation.findFirst({
      where: {
        allocation_id: dto.allocation_id,
        tutor_id: created_by,
        is_current: true,
      },
    });

    if (!allocation)
      throw new UnauthorizedException('Allocation not found or not yours');

    return this.prisma.meeting.create({
      data: {
        allocation_id: dto.allocation_id,
        created_by,
        meeting_type: dto.meeting_type,
        scheduled_at: new Date(dto.scheduled_at),
        location: dto.location,
        link: dto.link,
        notes: dto.notes,
      },
      include: this.include,
    });
  }

  async update(meeting_id: number, tutor_id: string, dto: UpdateMeetingDto) {
    const meeting = await this.prisma.meeting.findFirst({
      where: {
        meeting_id,
        created_by: tutor_id,
      },
    });

    if (!meeting) throw new NotFoundException('Meeting not found or not yours');

    return this.prisma.meeting.update({
      where: { meeting_id },
      data: {
        ...(dto.meeting_type && { meeting_type: dto.meeting_type }),
        ...(dto.scheduled_at && { scheduled_at: new Date(dto.scheduled_at) }),
        ...(dto.location !== undefined && { location: dto.location }),
        ...(dto.link !== undefined && { link: dto.link }),
        ...(dto.notes !== undefined && { notes: dto.notes }),
      },
      include: this.include,
    });
  }

  async findAll(
    userId: string,
    role: string,
    { page = 1, limit = 10, from, to }: MeetingQueryDto,
  ) {
    const skip = (page - 1) * limit;

    const where = {
      ...(role !== 'staff' && {
        allocation: {
          is_current: true,
          ...(role === 'tutor' ? { tutor_id: userId } : { student_id: userId }),
        },
      }),
      ...(from || to
        ? {
            scheduled_at: {
              ...(from && { gte: new Date(from) }),
              ...(to && { lte: new Date(to) }),
            },
          }
        : {}),
    };

    const [meetings, total] = await Promise.all([
      this.prisma.meeting.findMany({
        where,
        orderBy: { scheduled_at: 'asc' },
        skip,
        take: limit,
        include: this.include,
      }),
      this.prisma.meeting.count({ where }),
    ]);

    return {
      data: meetings,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }
}
