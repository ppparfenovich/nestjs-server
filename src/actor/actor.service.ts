import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorEntity } from './entity/actor.entity';
import { ActorDto } from './dto/actor.dto';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}

  async create(dto: ActorDto): Promise<ActorEntity> {
    const actor = this.actorRepository.create(dto);

    return await this.actorRepository.save(actor);
  }
}
