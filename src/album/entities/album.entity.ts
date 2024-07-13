import { Artist } from 'src/artist/entities/artist.entity';
import { Track } from 'src/track/entity/track.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('albums')
export class Album {
  @PrimaryGeneratedColumn({ name: 'AlbumId' })
  id: number;

  @Column({ name: 'Title' })
  title: string;

  @Column({ name: 'ArtistId', select: false })
  artistId: number;

  @ManyToOne(() => Artist, (artist) => artist.albums)
  artist: Artist;

  @OneToMany(() => Track, (track) => track.album)
  tracks: Track[];
}
