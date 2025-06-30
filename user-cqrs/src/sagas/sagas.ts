import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { map, mergeMap, Observable } from "rxjs";
import { AppService } from "src/app.service";
import { UserCreatedEvent } from "src/events/event.impl";


@Injectable()
export class UserSaga{
    constructor(private readonly appService: AppService) {}
    @Saga()
    userCreated = (events$:Observable<any>):Observable<ICommand>=>{
        return events$
        .pipe(
            ofType(UserCreatedEvent),
            mergeMap(async(event)=>
            {
                const command = await this.appService.userCreatedNoti(event.userName)
                return command
            }
        )
        )
    }
}