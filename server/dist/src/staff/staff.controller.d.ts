import { UserService } from '../user/user.service';
import { SignUpDto } from '../user/dto/signUp.dto';
export declare class StaffController {
    private userService;
    constructor(userService: UserService);
    createTutor(dto: SignUpDto): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    createStudent(dto: SignUpDto): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAllTutors(search?: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findAllTutees(search?: string, isAllocated?: string): Promise<({
        student_allocations: ({
            tutor: {
                email: string;
                role: import("../generated/prisma/enums").Role;
                user_id: string;
                first_name: string;
                last_name: string;
                created_at: Date;
                updated_at: Date;
            };
        } & {
            created_at: Date;
            updated_at: Date;
            is_current: boolean;
            allocation_id: number;
            student_id: string;
            tutor_id: string;
            allocated_by: string;
            allocated_at: Date;
        })[];
    } & {
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    })[]>;
    findOne(id: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, dto: Partial<SignUpDto>): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
