  import { Body, Controller, Get, Inject, OnModuleInit, Param, ParseIntPipe, Post } from '@nestjs/common';
  import { ApiGatewayService } from './api-gateway.service';
  import { userDto } from '@dtos/user/user.dto';
  import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
  import { loginDto } from '@dtos/user/login.dto';
  import { CreateEventDto, EventServiceClient ,Event as  EventResponse } from 'libs/protos/event.pb';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';


  @Controller()
  export class ApiGatewayController implements OnModuleInit {
    private eventService :EventServiceClient
    private metadata :Metadata
    constructor(@Inject('user-services')private client:ClientProxy,
                @Inject('event-services')private eventClient:ClientGrpc              
  ) {}
    onModuleInit() {
      this.eventService = this.eventClient.getService<EventServiceClient>('EventService')
      this.metadata = new Metadata()
    }
    @Post('register')
    createUser(@Body() data:userDto ){
      return this.client.send({cmd:'register'},data)
    }

    @Post('login')
    loginUser(@Body() loginInfo:loginDto ){
      return this.client.send({cmd:'login'},loginInfo)
    }

    @Get('user/:id')
    getUserById(@Param('id' , ParseIntPipe) id:number){
      return this.client.send({cmd:'userById'} ,id )
    }

    @Post('event')
    createEvent(@Body()  body:CreateEventDto):Observable<EventResponse>{
      return this.eventService.createEvent(body,this.metadata)
    }
  }
