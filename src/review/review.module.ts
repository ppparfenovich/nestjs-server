import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { MovieService } from 'src/movie/movie.service';
import { MovieEntity } from 'src/movie/entity/movie.entity';
import { ActorEntity } from 'src/actor/entity/actor.entity';
import { MoviePosterEntity } from 'src/movie/entity/poster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReviewEntity,
      MovieEntity,
      MoviePosterEntity,
      ActorEntity,
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}
