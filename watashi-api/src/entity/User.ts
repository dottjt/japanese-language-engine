const { Entity, PrimaryGeneratedColumn, Column, BaseEntity } = require('typeorm');

@Entity()
class User extends BaseEntity {

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
};

module.exports = {
  User,
};
export {};