import { Controller, Get } from '@nestjs/common';
import { Server1Service } from './server1.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class Server1Controller {
  constructor(private readonly server1Service: Server1Service) {}

  @Get()
  getHello(): string {
    return this.server1Service.getHello();
  }
  @MessagePattern({cmd:'greet'})
  handlemessage(@Payload() payload:{data:string}){
    return this.server1Service.getmessage(payload.data)
  }

}
