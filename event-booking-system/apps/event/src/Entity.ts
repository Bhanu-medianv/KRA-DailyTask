import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string


    @Column()
    description:string

    @Column({ type: 'timestamptz' })
    date:Date

}