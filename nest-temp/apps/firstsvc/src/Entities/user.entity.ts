import { Role } from "@app/libs";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
// import { Role } from "../DTO/role.enum";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    age:number

    @Column()
    email:string

    @Column()
    password:string

    @Column({type:"varchar" ,default:Role.User})
    role:Role
}