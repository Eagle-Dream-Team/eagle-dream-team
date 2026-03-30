// src/tutor/tutor.controller.ts
import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class TutorStudentsQueryDto extends PaginationDto {
  @IsOptional()
  @Transform(({ value }) =>
    value === 'true' ? true : value === 'false' ? false : undefined,
  )
  is_current?: boolean;
}
