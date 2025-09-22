import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsPositive,
  IsInt,
  IsArray,
  IsEnum,
  Matches,
  MinLength,
  IsUrl,
} from 'class-validator';
import { StartsWith } from '../decorators/starts-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @StartsWith('Task:')
  @Length(2, 10)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt({ message: 'Priority must be integer number' })
  @IsPositive({ message: 'Priority must be positive number' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Tags must be Array' })
  @IsEnum(TaskTag, { message: 'Usupported tag', each: true })
  @IsOptional()
  tags: TaskTag[];

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 synbols' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    message: 'Password must contains one capital letter and one number',
  })
  @IsOptional()
  password: string;

  @IsUrl({ protocols: ['https'] }, { message: 'URL is not correct' })
  @IsOptional()
  websiteUrl: string;
}
