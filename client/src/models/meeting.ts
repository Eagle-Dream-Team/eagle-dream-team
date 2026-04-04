import type { User, UserAllocation } from "./user";

export type MeetingType = "in_person" | "virtual";

export interface Meeting {
  meeting_id: number;
  allocation_id: number;
  created_by: string;
  meeting_type: MeetingType;
  scheduled_at: string;
  start_time: string;
  end_time: string;
  location: string | null;
  link: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  creator: User;
  allocation: UserAllocation;
}

export interface CreateMeetingPayload {
  allocation_id: number;
  meeting_type: MeetingType;
  scheduled_at: string;
  start_time: string;
  end_time: string;
  location?: string;
  link?: string;
  notes?: string;
}

export interface UpdateMeetingPayload {
  meeting_type?: MeetingType;
  scheduled_at?: string;
  start_time?: string;
  end_time?: string;
  location?: string;
  link?: string;
  notes?: string;
}
