import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class FileQueryDto extends PaginationDto {
  @ApiPropertyOptional({ enum: ['mine', 'shared_with_me', 'shared_by'] })
  @IsOptional()
  @IsString()
  filter?: 'mine' | 'shared_with_me' | 'shared_by';

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  shared_by?: string;
}
