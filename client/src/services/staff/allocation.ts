// src/services/staff/allocations.ts
import api, { handleApiError } from "@/lib/axios";
import type { PaginationParams } from "@/models/common";
import type { UserAllocation, AllocationResult } from "@/models/user";
import type { PaginatedResult } from "@server/common/dto/pagination.dto";

export interface AllocationFilters extends PaginationParams {
  tutor_id?: string;
  student_id?: string;
  allocated_by?: string;
  is_current?: boolean;
}

export async function allocateStudents(
  tutor_id: string,
  student_ids: string[],
): Promise<AllocationResult> {
  try {
    const { data } = await api.post<AllocationResult>("/staff/allocations", {
      tutor_id,
      student_ids,
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function reallocateStudent(
  student_id: string,
  tutor_id: string,
): Promise<{ allocation: UserAllocation }> {
  try {
    const { data } = await api.patch<{ allocation: UserAllocation }>(
      `/staff/allocations/${student_id}`,
      { tutor_id },
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function deallocateStudent(
  student_id: string,
): Promise<{ allocation: UserAllocation }> {
  try {
    const { data } = await api.delete<{ allocation: UserAllocation }>(
      `/staff/allocations/${student_id}`,
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getAllocations(
  params?: AllocationFilters,
): Promise<PaginatedResult<UserAllocation>> {
  try {
    const { data } = await api.get<PaginatedResult<UserAllocation>>(
      "/staff/allocations",
      { params },
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
