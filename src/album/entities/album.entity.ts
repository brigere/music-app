import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity('albums');
export class Album {
  @PrimaryGeneratedColumn({ name: 'AlbumId' })
  id: number;

  @Column({ name: 'Title' })
  title: string;

  @Column({ name: 'ArtistId' })
  artistId: number;
}
