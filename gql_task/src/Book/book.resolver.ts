
import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as bookmodel } from "../graphqlp";


@Resolver(of=>Book)
export class Bookresolver{
    @Query(returns => [Book],{name:'books'})

    getAllBooks(){
        let arr : bookmodel[] =[
            {id:1 ,title:"fdsa" , price:200},
            {id:2 ,title:"asdf" , price:500},
            {id:3 ,title:"afsd" , price:300},
        ]
        return arr
    }
}