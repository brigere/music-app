import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TrackService } from './track.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tracks')
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.trackService.findById(id);
  }
}
