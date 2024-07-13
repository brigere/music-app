import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}

  async getAll(limit?: number, skip?: number) {
    return this.artistRepository.find({
      take: limit || 10,
      skip: skip || 0,
      relations: {
        albums: true,
      },
    });
  }

  async getById(id: number) {
    const result = await this.artistRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
