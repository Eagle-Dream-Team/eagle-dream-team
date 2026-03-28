// src/common/dto/pagination.dto.ts
export class PaginationDto {
  page?: number = 1;
  limit?: number = 10;
  search?: string;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
