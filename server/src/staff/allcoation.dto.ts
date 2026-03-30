import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

// allocation.dto.ts
export class AllocationQueryDto extends PaginationDto {
  @IsOptional()
  tutor_id?: string;

  @IsOptional()
  student_id?: string;

  @IsOptional()
  allocated_by?: string;

  @IsOptional()
  @Transform(({ value }) =>
    value === 'true' ? true : value === 'false' ? false : undefined,
  )
  is_current?: boolean;
}
