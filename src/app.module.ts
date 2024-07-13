import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistModule } from './artist/artist.module';
import { Artist } from './artist/entities/artist.entity';
import { AlbumModule } from './album/album.module';
import { Album } from './album/entities/album.entity';
import { TrackModule } from './track/track.module';
import { Track } from './track/entity/track.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data/music.db',
      synchronize: false,
      entities: [Artist, Album, Track],
    }),
    ArtistModule,
    AlbumModule,
    TrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
