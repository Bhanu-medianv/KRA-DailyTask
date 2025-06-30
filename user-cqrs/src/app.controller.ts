import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createUser(@Body() user:User){
    return this.appService.createUser(user)
  }
}
