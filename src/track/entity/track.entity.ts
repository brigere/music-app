import { Album } from 'src/album/entities/album.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn({ name: 'TrackId' })
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'AlbumId', select: false })
  albumId: number;

  @ManyToOne(() => Album, (album) => album.tracks)
  album: Album;
}
