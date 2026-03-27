import api, { handleApiError } from "@/lib/axios";
import type { SignUpDto } from "@server/user/dto/signUp.dto";

export async function createTutor(payload: Omit<SignUpDto, "role">) {
  try {
    const { data } = await api.post("/staff/users/tutor", {
      ...payload,
      role: "tutor",
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getTutors(search?: string) {
  try {
    const { data } = await api.get("/staff/users/tutors", {
      params: {
        ...(search && { search }),
      },
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
export async function createStudent(payload: Omit<SignUpDto, "role">) {
  try {
    const { data } = await api.post("/staff/users/student", {
      ...payload,
      role: "student",
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getStudents(search?: string, isAllocated?: boolean) {
  try {
    const { data } = await api.get("/staff/users/students", {
      params: {
        ...(search && { search }),
        ...(isAllocated !== undefined && { is_allocated: isAllocated }),
      },
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function updateUser(
  userId: string,
  payload: Partial<Omit<SignUpDto, "role">>,
) {
  try {
    const { data } = await api.patch(`/staff/users/${userId}`, payload);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
