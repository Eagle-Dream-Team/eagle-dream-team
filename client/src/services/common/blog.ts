import api, { handleApiError } from "@/lib/axios";
import type { PaginatedResult } from "@server/common/dto/pagination.dto";

export interface BlogPost {
  post_id: number;
  title: string;
  content: string;
  summary?: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  author_id: string;
  author?: {
    user_id: string;
    first_name: string;
    last_name: string;
    role: string;
  };
}

export interface BlogQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  author_id?: string;
}

export async function getBlogs(
  params?: BlogQueryParams,
): Promise<PaginatedResult<BlogPost>> {
  try {
    const { data } = await api.get<PaginatedResult<BlogPost>>("/blog/all", {
      params,
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getBlog(post_id: number): Promise<BlogPost> {
  try {
    const { data } = await api.get<BlogPost>(`/blog/${post_id}`);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function createBlog(body: {
  title: string;
  content: string;
}): Promise<BlogPost> {
  try {
    const { data } = await api.post<BlogPost>("/blog/post", body);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function editBlog(
  post_id: number,
  body: { title: string; content: string },
): Promise<BlogPost> {
  try {
    const { data } = await api.patch<BlogPost>(`/blog/${post_id}`, body);
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getBlogAuthors(params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<
  PaginatedResult<{
    user_id: string;
    first_name: string;
    last_name: string;
    role: string;
  }>
> {
  try {
    const { data } = await api.get("/blog/authors", { params });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
