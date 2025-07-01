import { Role } from "@app/libs";
import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";
// import { Role } from "./role.enum";

export class UserDto{
    @IsString()
    name:string

    @IsNumber()
    age:number

    @IsEmail()
    email:string

    @IsString()
    password:string

    @IsEnum(Role)
    role:Role

}