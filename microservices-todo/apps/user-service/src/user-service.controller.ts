import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import {MessagePattern} from '@nestjs/microservices'
@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @Get()
  getHello(): string {
    return this.userServiceService.getHello();
  }
  @MessagePattern({cmd:'user-details'})
  register(){
    this.userServiceService
  }


}
