import { Injectable } from '@nestjs/common';

@Injectable()
export class Server1Service {
  getHello(): string {
    return 'Hello World!';
  }
  getmessage(name:string){
      return `hello ${name} this is the notification message`
  }
}
