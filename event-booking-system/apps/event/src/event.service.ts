import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from 'libs/protos/event.pb';
import { Repository } from 'typeorm';
import { Event } from './Entity';

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private EventRepository:Repository<Event> ){}
  async createEvent(createEvent:CreateEventDto):Promise<Event>{
    const new_event = this.EventRepository.create(createEvent)
    return await this.EventRepository.save(new_event)
  }
}
