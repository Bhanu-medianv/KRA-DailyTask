import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    user_id:number

    @Column()
    name:string

    @Column()
    age:number

    @Column()
    email:string

    @Column()
    password:string
}