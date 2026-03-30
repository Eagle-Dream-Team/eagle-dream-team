import api, { handleApiError } from "@/lib/axios";
import type { UserAllocation } from "@/models/user";

export async function getMyTutor(): Promise<UserAllocation> {
  try {
    const { data } = await api.get<UserAllocation>("/student/my-tutor");
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
