    import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
    import { UserCommand } from "./command.impl";
    import { UserCreatedEvent } from "src/events/event.impl";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity";
import { Repository } from "typeorm";
    @CommandHandler(UserCommand)
    export class CreateCommand implements ICommandHandler<UserCommand>{
                constructor(private readonly eventBus:EventBus,
                    @InjectRepository(User)
                    private userRepository:Repository<User>
                    
                ){}
                async execute(command: UserCommand): Promise<any> {
                    const new_user = this.userRepository.create(command)
                    
                    await this.userRepository.save(new_user) 
                    this.eventBus.publish(new UserCreatedEvent(command.name))
                    return new_user
                }
    }