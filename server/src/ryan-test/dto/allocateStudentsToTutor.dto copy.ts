import { IsArray, IsEmail, IsString, IsUUID, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { Transform } from 'class-transformer/types/decorators';

/* with this */
export class AllocateStudentsToTutorDto {
  @IsArray()
  @ApiProperty({ example: ["student_1_id", "student_2_id", "student_3_id"] })
  studentIds!: string[];

  @IsString()
  @ApiProperty({ example: "tutor_id" })
  tutorId!: string;
  
  @IsString()
  // @ApiProperty({ example: "staff_id" })
  @ApiProperty({ example: "staff_id" })
  allocatedBy!: string;
}
