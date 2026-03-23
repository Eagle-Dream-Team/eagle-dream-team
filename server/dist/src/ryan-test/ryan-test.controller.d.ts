import { RyanTestService } from './ryan-test.service';
export declare class RyanTestController {
    private ryanTestService;
    constructor(ryanTestService: RyanTestService);
    findAllTutors(): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        user_id: string;
        first_name: string;
        last_name: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
