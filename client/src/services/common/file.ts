import api, { handleApiError } from "@/lib/axios";
import type { AppFile, FileQueryParams } from "@/models/file";
import type { PaginatedResult } from "@server/common/dto/pagination.dto";

export async function uploadFile(
  file: File,
  filename: string,
  autoRenameDuplicates = true,
): Promise<AppFile> {
  try {
    const formData = new FormData();
    const blob = new Blob([file], { type: file.type });
    formData.append("file", blob);
    formData.append("title", filename);
    const { data } = await api.post<AppFile>("/file/upload", formData, {
      headers: {
        "Content-Type": undefined, // let axios set it automatically with boundary
      },
      params: { autoRenameDuplicates },
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getFiles(
  params?: FileQueryParams,
): Promise<PaginatedResult<AppFile>> {
  try {
    const { data } = await api.get<PaginatedResult<AppFile>>("/file", {
      params,
    });

    console.log("Fetched files:", data);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getFile(fileId: number): Promise<AppFile> {
  try {
    const { data } = await api.get<AppFile>(`/file/${fileId}`);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
