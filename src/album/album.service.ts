import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ) {}

  findAll(limit?: number, skip?: number) {
    return this.albumRepository.find({
      take: limit || 10,
      skip: skip || 0,
      relations: {
        artist: true,
        // tracks: true,
      },
    });
  }

  async findById(id: number) {
    const album = await this.albumRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        tracks: true,
      },
    });

    if (!album) {
      throw new HttpException('album not found', HttpStatus.NOT_FOUND);
    }

    return album;
  }
}
