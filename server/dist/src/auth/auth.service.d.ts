import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from '../user/dto/signIn.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(dto: SignInDto): Promise<{
        access_token: string;
        role: import("../generated/prisma/enums").Role;
    }>;
}
