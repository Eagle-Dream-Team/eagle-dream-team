import api, { handleApiError } from "@/lib/axios";
import type { PaginationParams } from "@/models/common";
import type { Student, Tutor } from "@/models/user";
import type { PaginatedResult } from "@server/common/dto/pagination.dto";
import type { SignUpDto } from "@server/user/dto/signUp.dto";

export interface StudentFilters extends PaginationParams {
  is_allocated?: boolean;
}

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

// export async function getTutors(search?: string): Promise<Tutor[]> {
//   try {
//     const { data } = await api.get<Tutor[]>("/staff/users/tutors", {
//       params: {
//         ...(search && { search }),
//       },
//     });
//     return data;
//   } catch (error) {
//     return handleApiError(error);
//   }
// }

export async function getTutors(
  params?: PaginationParams,
): Promise<PaginatedResult<Tutor>> {
  try {
    const { data } = await api.get<PaginatedResult<Tutor>>(
      "/staff/users/tutors",
      {
        params,
      },
    );
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

export async function getStudents(
  params?: StudentFilters,
): Promise<PaginatedResult<Student>> {
  try {
    const { data } = await api.get<PaginatedResult<Student>>(
      "/staff/users/students",
      {
        params,
      },
    );
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
