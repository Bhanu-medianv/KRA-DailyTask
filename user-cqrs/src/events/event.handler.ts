import { EventsHandler, IEventHandler } from "@nestjs/cqrs"
import { UserCreatedEvent} from "./event.impl"

@EventsHandler(UserCreatedEvent)
export class userEventHandler implements IEventHandler<UserCreatedEvent>{
        handle(event: UserCreatedEvent) {
            console.log(`${event.userName} releases the event`)
        }
}