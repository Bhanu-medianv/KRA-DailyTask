import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto, EventServiceControllerMethods } from 'libs/protos/event.pb';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

@Controller()

export class EventController {
  constructor(private readonly eventService: EventService) {}
  @GrpcMethod('EventService','CreateEvent')
  createEvent(CreateEventDto:CreateEventDto ){
        return this.eventService.createEvent(CreateEventDto)
  }

}
