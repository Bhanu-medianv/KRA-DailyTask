import { IsNumber, IsString } from "class-validator";

export class userDto{
    @IsString()
    name:string

    @IsNumber()
    age:number
    
    @IsString()
    email:string

    @IsString()
    password:string    
}