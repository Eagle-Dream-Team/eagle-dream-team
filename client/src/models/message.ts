import type { User } from "./user";

export interface Message {
  message_id: number;
  sender_id: string;
  receiver_id: string;
  content: string;
  file_id?: number | null;
  sent_at: string;
  is_read: boolean;
  mine: boolean;
}

export interface Conversation {
  allocation_id: string;
  peer: Omit<User, "password_hash">;
  last_message: Message | null;
  unread_count: number;
}
