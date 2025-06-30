import { CommandHandler, ICommandHandler, IEventHandler } from "@nestjs/cqrs";
import { notification } from "./notification.impl";

@CommandHandler(notification)
export class CreateHandler implements ICommandHandler<notification>{
            async execute(command: notification): Promise<any> {
                const {user} = command
                console.log(`dear ${user} you are logged in`)
            }
}