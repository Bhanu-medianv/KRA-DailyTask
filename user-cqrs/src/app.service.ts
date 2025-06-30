import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserCommand } from './commands/command.impl';
import { stringify } from 'node:querystring';
import { notification } from './commands/notification.impl';
import { User } from './entity';

@Injectable()
export class AppService {
  constructor (private command:CommandBus){}
  getHello(): string {
    return 'Hello World!';
  }
  async createUser(body:{name:string , email:string}){
    return this.command.execute(new UserCommand(body.name , body.email))
  }

  userCreatedNoti(username:string){
    return this.command.execute(new notification(username))
  }
}
