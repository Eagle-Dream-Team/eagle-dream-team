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
  student_allocations: {
    allocation_id: number;
    is_current: boolean;
    tutor: User;
  }[];
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
