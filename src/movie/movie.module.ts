import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entity/movie.entity';
import { ActorEntity } from 'src/actor/entity/actor.entity';
import { MoviePosterEntity } from './entity/poster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity, MoviePosterEntity, ActorEntity]),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
