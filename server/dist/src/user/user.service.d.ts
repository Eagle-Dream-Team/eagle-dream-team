import { SignUpDto } from './dto/signUp.dto';
import { PrismaService } from 'prisma.service';
import { ChangePasswordDto } from './dto/changePassword.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(dto: SignUpDto): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
    findByEmail(email: string): Promise<{
        user_id: string;
        email: string;
        password_hash: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    } | null>;
    changePassword(dto: ChangePasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    findById(user_id: string): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
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
    findAllTutees(search?: string, isAllocated?: boolean): Promise<({
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
    updateUser(user_id: string, dto: Partial<SignUpDto>): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
}
