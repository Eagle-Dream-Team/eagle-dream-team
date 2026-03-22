import { UserService } from '../user/user.service';
import { SignUpDto } from '../user/dto/signUp.dto';
export declare class StaffController {
    private userService;
    constructor(userService: UserService);
    createTutor(dto: SignUpDto): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
    createStudent(dto: SignUpDto): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
    findAllTutors(search?: string): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findAllTutees(search?: string, isAllocated?: string): Promise<({
        student_allocations: ({
            tutor: {
                user_id: string;
                email: string;
                first_name: string;
                last_name: string;
                role: import("../generated/prisma/enums").Role;
                created_at: Date;
                updated_at: Date;
            };
        } & {
            created_at: Date;
            updated_at: Date;
            allocation_id: number;
            student_id: string;
            tutor_id: string;
            allocated_by: string;
            allocated_at: Date;
            is_current: boolean;
        })[];
    } & {
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    })[]>;
    findOne(id: string): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, dto: Partial<SignUpDto>): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
}
