import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CreateQuery } from "./todo.query";

@QueryHandler(CreateQuery)
export class queryHandler implements IQueryHandler<CreateQuery>{
    async execute(query: CreateQuery): Promise<any> {
        return 'this is executing from query'
    }
}