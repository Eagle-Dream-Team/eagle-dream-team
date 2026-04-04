import { IsEmail, IsString, IsUUID, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

/* with this */
export class AllocateStudentToTutorDto {
  @ApiProperty()
  studentId!: string;
  
  @ApiProperty()
  tutorId!: string;
  
  @ApiProperty()
  allocatedBy!: string;
}
