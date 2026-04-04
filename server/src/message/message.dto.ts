import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

// allocation.dto.ts
export class MessageQueryDto extends PaginationDto {
    user1_id!: string;
    user2_id!: string;
}
