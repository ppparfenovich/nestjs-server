import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Task title must be string' })
  @IsNotEmpty({ message: 'Task title cannot be empty' })
  @Length(2, 20, { message: 'Task title must be from 2 to 20 symbols' })
  title: string;

  @IsBoolean({ message: 'Status must be boolean' })
  isCompleted: boolean;
}
