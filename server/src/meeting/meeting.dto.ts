import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export enum MeetingType {
  in_person = 'in_person',
  virtual = 'virtual',
}

export class CreateMeetingDto {
  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  allocation_id!: number;

  @ApiProperty({ enum: MeetingType })
  @IsEnum(MeetingType)
  meeting_type!: MeetingType;

  @ApiProperty()
  @IsDateString()
  scheduled_at!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  link?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty()
  @IsDateString()
  start_time!: string;

  @ApiProperty()
  @IsDateString()
  end_time!: string;
}

export class MeetingQueryDto extends PaginationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  to?: string;
}

export class UpdateMeetingDto {
  @ApiPropertyOptional({ enum: MeetingType })
  @IsOptional()
  @IsEnum(MeetingType)
  meeting_type?: MeetingType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  scheduled_at?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  link?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  start_time?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  end_time?: string;
}
