import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User.entity';
@Entity()
export class Books extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    price: number;

    @Column()
    releasedDate: string;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}
