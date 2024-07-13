import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDTO } from 'src/shared/dto';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get('/')
  async getAll(@Query() pagination: PaginationDTO) {
    const result = await this.albumService.findAll(
      pagination.limit,
      pagination.skip,
    );
    return result;
  }
}
