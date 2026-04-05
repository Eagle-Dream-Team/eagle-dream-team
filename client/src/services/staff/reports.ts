import api, { handleApiError } from "@/lib/axios";
import type {
  InactiveStudent,
  ReportStats,
  UnallocatedStudent,
} from "@/models/user";

export async function getReportStats(): Promise<ReportStats> {
  try {
    const { data } = await api.get<ReportStats>("/staff/reports/stats");
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getUnallocatedStudents(): Promise<{
  data: UnallocatedStudent[];
  total: number;
}> {
  try {
    const { data } = await api.get("/staff/reports/exceptions/unallocated");
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getInactiveStudents(): Promise<{
  data: InactiveStudent[];
}> {
  try {
    const { data } = await api.get("/staff/reports/exceptions/inactive");
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
