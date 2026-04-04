import api, { handleApiError } from "@/lib/axios";
import type { PaginatedResult, PaginationParams } from "@/models/common";
import type {
  CreateMeetingPayload,
  Meeting,
  UpdateMeetingPayload,
} from "@/models/meeting";

export interface MeetingParams extends PaginationParams {
  from?: string;
  to?: string;
}

export async function getMeetings(
  params?: MeetingParams,
): Promise<PaginatedResult<Meeting>> {
  try {
    const { data } = await api.get<PaginatedResult<Meeting>>("/meetings", {
      params,
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function createMeeting(
  payload: CreateMeetingPayload,
): Promise<Meeting> {
  try {
    const { data } = await api.post<Meeting>("/meetings", payload);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function updateMeeting(
  meetingId: number,
  payload: UpdateMeetingPayload,
): Promise<Meeting> {
  try {
    const { data } = await api.patch<Meeting>(
      `/meetings/${meetingId}`,
      payload,
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
