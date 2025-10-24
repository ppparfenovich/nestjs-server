import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @ApiProperty({
    description: 'User name',
    example: 'Jhon Doe',
    maxLength: 50,
  })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(50, { message: 'Name cannot be longer then 50 symbols' })
  name: string;

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
