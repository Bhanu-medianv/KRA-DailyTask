import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCommand } from "./todo.command";
import { TodoService } from "../todo.service";

@CommandHandler(CreateCommand)
export class CreateHandler implements ICommandHandler<CreateCommand>{
        async execute(command: CreateCommand){
            console.log(command)
            return ({
                title:command.title,
                description: command.description
            })
        }
}