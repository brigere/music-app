import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn({ name: 'TrackId' })
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'AlbumId' })
  albumId: number;
}
