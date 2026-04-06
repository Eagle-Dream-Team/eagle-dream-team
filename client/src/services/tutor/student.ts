import api, { handleApiError } from "@/lib/axios";
import type { PaginationParams } from "@/models/common";
import type { PaginatedResult } from "@server/common/dto/pagination.dto";
import type { UserAllocation } from "@/models/user";

export interface TutorStudentFilters extends PaginationParams {
  is_current?: boolean;
}

export async function getTutorStudents(
  params?: TutorStudentFilters,
): Promise<PaginatedResult<UserAllocation>> {
  try {
    const { data } = await api.get<PaginatedResult<UserAllocation>>(
      "/tutor/students",
      { params },
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export const getTutorUnreadMessages = () =>
  api.get<{ count: number }>("/tutor/overview/unread-messages");

export const getTutorUpcomingMeetings = () =>
  api.get<{ count: number }>("/tutor/overview/upcoming-meetings");
