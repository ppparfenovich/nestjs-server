import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
  @ApiProperty({
    description: 'Movie ID',
    example: '1234',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Movie title',
    example: 'Fight Club',
    type: String,
  })
  title: string;
}
