import type { User } from "./user";

export interface AppFile {
  file_id: number;
  uploaded_by: string;
  title: string;
  file_type: string | null;
  url: string;
  download_url: string;
  created_at: string;
  updated_at: string;
  uploader?: Pick<User, "user_id" | "first_name" | "last_name" | "email">;
  messages?: {
    sender: Pick<User, "user_id" | "first_name" | "last_name" | "email">;
    sent_at: string;
  }[];
}

export type FileFilter = "mine" | "shared_with_me" | "shared_by";

export interface FileQueryParams {
  page?: number;
  limit?: number;
  filter?: FileFilter;
  shared_by?: string;
}
