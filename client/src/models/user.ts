export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: "student" | "tutor" | "staff";
  created_at: string;
  updated_at: string;
}

export interface Student extends User {
  role: "student";
  student_allocations: StudentAllocation[];
}
export interface StudentAllocation {
  allocation_id: number;
  is_current: boolean;
  tutor: User;
}

export interface Tutor extends User {
  role: "tutor";
  tutor_allocations: {
    allocation_id: number;
    is_current: boolean;
    student: User;
  }[];
}

export interface Staff extends User {
  role: "staff";
}

export interface UserAllocation {
  allocation_id: number;
  student_id: string;
  tutor_id: string;
  allocated_by: string;
  allocated_at: string;
  is_current: boolean;
  created_at: string;
  updated_at: string;
  student?: User;
  tutor?: User;
  staff?: User;
}

export interface AllocationResult {
  allocated: UserAllocation[];
  skipped: {
    student_id: string;
    reason: string;
    current_tutor: string;
  }[];
}

export interface ReportStats {
  messages_last_7_days: number;
  average_messages_per_tutor: number;
  total_tutors: number;
}

export interface UnallocatedStudent {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

export interface InactiveStudent {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  tutor: Pick<User, "user_id" | "first_name" | "last_name" | "email"> | null;
  messages_last_7_days: number;
  messages_last_28_days: number;
}
