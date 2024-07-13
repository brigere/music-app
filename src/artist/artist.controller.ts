import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { PagnationQueryDTO } from './dtos/artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/')
  async getAll(@Query() paginationQuery: PagnationQueryDTO) {
    const { skip, limit } = paginationQuery;
    const artists = await this.artistService.getAll(limit, skip);

    return artists;
  }

  @Get('/:id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const artist = await this.artistService.getById(id);
    return artist;
  }
}
