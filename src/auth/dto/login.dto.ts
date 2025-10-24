import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: 'User email',
    example: 'doe@example.com',
  })
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email should be valid' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'johNdoe123',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password should be atleast 6 symbols' })
  @MaxLength(128, { message: 'Password cannot be longer than 128 symbols' })
  password: string;
}
