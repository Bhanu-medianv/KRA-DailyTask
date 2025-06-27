import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CreateQuery } from "./todo.query";
import { TodoService } from "../todo.service";

@QueryHandler(CreateQuery)
export class queryHandler implements IQueryHandler<CreateQuery>{
    async execute(query: CreateQuery): Promise<any> {
        return 'this is executing from query'
    }
}