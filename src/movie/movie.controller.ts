import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';
import {
  ApiBody,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MovieResponse } from './dto/movie-response.dto';

@ApiTags('Movie')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Get all movies',
    description: 'Return list with all movies',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Found movies',
    type: [MovieResponse],
  })
  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @ApiOperation({
    summary: 'Get movie by ID',
    description: 'Return movie information',
  })
  // @ApiParam({
  //   name: 'id',
  //   type: 'string',
  //   description: 'Movie ID',
  // })
  // @ApiQuery({
  //   name: 'year',
  //   type: 'string',
  //   description: 'Movie year',
  // })
  // @ApiHeader({
  //   name: 'X-Auth-Token',
  //   description: 'Token authorization',
  // })
  @ApiOkResponse({ description: 'Found movie', type: MovieResponse })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'Found movie',
  // })
  @ApiNotFoundResponse({
    description: 'Movie not found',
    example: {
      status: 404,
      message: ' Movie not found',
      timestamp: '2025-08-10',
      path: '/movie/123',
    },
  })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   description: 'Movie not found',
  // })
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @ApiOperation({
    summary: 'Create movie',
    description: 'Adding movie to DB',
  })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       title: { type: 'string', example: 'Fight Club' },
  //       releaseYear: { type: 'date', example: '1998' },
  //       imageUrl: { type: 'string', example: 'https://image.com/1234' },
  //     },
  //   },
  // })
  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
