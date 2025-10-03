import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entity/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from 'src/actor/entity/actor.entity';
import { MoviePosterEntity } from './entity/poster.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(MoviePosterEntity)
    private readonly posterRepository: Repository<MoviePosterEntity>,
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isAvailable: true,
      },
      order: {
        createdAt: 'desc',
      },
      take: 5,
      select: {
        id: true,
        title: true,
        releaseYear: true,
      },
    });
  }

  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
      relations: ['actors'],
    });

    if (!movie) throw new NotFoundException('Movie not exist');

    return movie;
  }

  async create(dto: MovieDto): Promise<MovieEntity> {
    const { title, releaseYear, imageUrl, actorIds } = dto;

    const actors = await this.actorRepository.find({
      where: {
        id: In(actorIds),
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Actor/s not found');

    let poster: MoviePosterEntity | null = null;

    if (imageUrl) {
      poster = this.posterRepository.create({ url: imageUrl });
      await this.posterRepository.save(poster);
    }

    const movie = this.movieRepository.create({
      title,
      releaseYear,
      poster,
      actors,
    });

    return await this.movieRepository.save(movie);
  }

  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    Object.assign(movie, dto);

    await this.movieRepository.save(movie);

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.movieRepository.remove(movie);

    return movie.id;
  }
}
