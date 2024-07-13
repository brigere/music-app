import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn({ name: 'ArtistId' })
  id: number;

  @Column({ name: 'Name' })
  name: string;
}
