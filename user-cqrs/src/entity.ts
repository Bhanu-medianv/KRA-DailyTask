import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
}