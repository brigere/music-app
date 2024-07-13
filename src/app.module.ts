import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistModule } from './artist/artist.module';
import { Artist } from './artist/entities/artist.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data/music.db',
      synchronize: false,
      entities: [Artist],
    }),
    ArtistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
