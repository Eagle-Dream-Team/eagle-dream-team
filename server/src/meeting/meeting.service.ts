import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  CreateMeetingDto,
  MeetingQueryDto,
  UpdateMeetingDto,
} from './meeting.dto';
import { PrismaService } from 'prisma.service';

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

    this.validateTimes(dto.start_time, dto.end_time);

    return this.prisma.meeting.create({
      data: {
        allocation_id: dto.allocation_id,
        created_by,
        meeting_type: dto.meeting_type,
        scheduled_at: new Date(dto.scheduled_at),
        location: dto.location,
        start_time: new Date(dto.start_time),
        end_time: new Date(dto.end_time),
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

    if (dto.start_time || dto.end_time) {
      const start = dto.start_time ?? meeting.start_time.toISOString();
      const end = dto.end_time ?? meeting.end_time.toISOString();
      this.validateTimes(start, end);
    }

    return this.prisma.meeting.update({
      where: { meeting_id },
      data: {
        ...(dto.meeting_type && { meeting_type: dto.meeting_type }),
        ...(dto.scheduled_at && { scheduled_at: new Date(dto.scheduled_at) }),
        ...(dto.location !== undefined && { location: dto.location }),
        ...(dto.link !== undefined && { link: dto.link }),
        ...(dto.notes !== undefined && { notes: dto.notes }),
        ...(dto.start_time && { start_time: new Date(dto.start_time) }),
        ...(dto.end_time && { end_time: new Date(dto.end_time) }),
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

    const meetings = await this.prisma.meeting.findMany({
      where,
      orderBy: { scheduled_at: 'asc' },
      skip,
      take: limit,
      include: this.include,
    });

    const total = await this.prisma.meeting.count({ where });

    return {
      data: meetings,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  private validateTimes(start_time: string, end_time: string) {
    if (new Date(start_time) >= new Date(end_time))
      throw new BadRequestException('start_time must be before end_time');
  }
}
