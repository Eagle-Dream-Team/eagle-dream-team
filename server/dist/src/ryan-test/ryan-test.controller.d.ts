import { RyanTestService } from './ryan-test.service';
export declare class RyanTestController {
    private ryanTestService;
    constructor(ryanTestService: RyanTestService);
    findAllTutors(): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
