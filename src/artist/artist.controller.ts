import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { PaginationDTO } from 'src/shared/dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Artists')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/')
  async getAll(@Query() paginationQuery: PaginationDTO) {
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
