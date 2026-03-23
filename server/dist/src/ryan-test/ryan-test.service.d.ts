import { PrismaService } from 'prisma.service';
export declare class RyanTestService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllUsers(): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
