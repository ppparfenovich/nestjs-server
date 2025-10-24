import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class MovieDto {
  @ApiProperty({
    description: 'Movie title',
    type: String,
    example: 'Fight Club',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Movie release year',
    type: Number,
    example: 1998,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;

  @ApiPropertyOptional({
    description: 'Movie poster',
    type: String,
    example: 'https://image.com/12345.jpg',
  })
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({
    description: 'Actors IDs',
    type: [String],
    example: ['12345', '54321'],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];
}
