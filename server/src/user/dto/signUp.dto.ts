import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import {
  IsEmail,
  IsString,
  IsOptional,
  IsUUID,
  MinLength,
  IsEnum,
} from 'class-validator';
import { Role } from 'src/generated/prisma/client';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @ApiProperty({ enum: Role, enumName: 'Role' })
  @IsEnum(Role)
  role: Role;
}
