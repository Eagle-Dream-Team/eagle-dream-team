import { PrismaService } from 'prisma.service';
export declare class RyanTestService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllUsers(): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findAllStudents(): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
