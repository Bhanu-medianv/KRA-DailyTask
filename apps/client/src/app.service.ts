import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('tcp_client') private client:ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }
  async getGreet(name:string){
    const result  =  await  lastValueFrom(this.client.send({cmd:'greet'},name));
    return result
  }
  
}
