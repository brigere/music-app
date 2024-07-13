import { Album } from 'src/album/entities/album.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn({ name: 'ArtistId' })
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];
}
