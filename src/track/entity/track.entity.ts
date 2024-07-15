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

  @Column({ name: 'MediaTypeId', select: false })
  mediaTypeId: number;

  @Column({ name: 'GenreId', select: false })
  genreId: number;

  @Column({ name: 'Composer' })
  composer: string;

  @Column({ name: 'Milliseconds' })
  milliseconds: number;

  @Column({ name: 'Bytes' })
  bytes: number;

  @Column({ name: 'UnitPrice' })
  unitPrice: number;

  @ManyToOne(() => Album, (album) => album.tracks)
  album: Album;
}
