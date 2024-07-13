import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.trackService.findById(id);
  }
}
