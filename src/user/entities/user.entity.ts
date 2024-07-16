import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'FirstName' })
  firstName: string;

  @Column({ name: 'LastName' })
  lastName: string;

  @Column({ name: 'Email', unique: true })
  email: string;

  @Column({ name: 'Password', select: false })
  password: string;

  @Column({ name: 'Role', select: false })
  role: string;
}
