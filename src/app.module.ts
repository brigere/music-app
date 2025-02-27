import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistModule } from './artist/artist.module';
import { Artist } from './artist/entities/artist.entity';
import { AlbumModule } from './album/album.module';
import { Album } from './album/entities/album.entity';
import { TrackModule } from './track/track.module';
import { Track } from './track/entity/track.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data/music.db',
      synchronize: false,
      entities: [Artist, Album, Track, User],
    }),
    ArtistModule,
    AlbumModule,
    TrackModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    })
  ],
  providers: [AppService],
})
export class AppModule {}
