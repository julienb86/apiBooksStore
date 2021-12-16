import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { role } from '../UserEnum/role';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pseudo: string;

  @Column({ default: role.User })
  role: role;

  @Column()
  email: string;

  @Column()
  password: string;
}
