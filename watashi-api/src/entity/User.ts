import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    thumbUrl: string;

    @Column()
    accessToken: string;

    @Column()
    idToken: string;

    @Column()
    expiresAt: string;

}
