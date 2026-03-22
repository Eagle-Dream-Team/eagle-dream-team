import { UserService } from 'src/user/user.service';
export declare class TutorController {
    private userService;
    constructor(userService: UserService);
    hello(): string;
}
