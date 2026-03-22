import { Role } from 'src/generated/prisma/client';
export declare class SignUpDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
}
