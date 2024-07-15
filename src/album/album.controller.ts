import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PaginationDTO } from 'src/shared/dto';
import { AlbumService } from './album.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Albums')
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

  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number) {
    return this.albumService.findById(id);
  }
}
