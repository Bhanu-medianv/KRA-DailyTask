import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async getData(@Body() name:string){
       const response = await this.appService.getGreet(name)
       return this.appService.getGreet(name)
  }
}
