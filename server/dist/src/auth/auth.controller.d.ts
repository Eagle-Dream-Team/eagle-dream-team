import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SignUpDto } from '../user/dto/signUp.dto';
import { SignInDto } from 'src/user/dto/signIn.dto';
import { ChangePasswordDto } from 'src/user/dto/changePassword.dto';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signUp(dto: SignUpDto): Promise<{
        user_id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: import("../generated/prisma/enums").Role;
        created_at: Date;
        updated_at: Date;
    }>;
    signIn(dto: SignInDto): Promise<{
        access_token: string;
        role: import("../generated/prisma/enums").Role;
    }>;
    changePassword(dto: ChangePasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    signOut(): {
        success: boolean;
        message: string;
    };
}
