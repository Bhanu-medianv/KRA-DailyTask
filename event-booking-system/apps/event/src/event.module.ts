import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './Entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
          type:'postgres',
          host:'localhost',
          port:5432,
          username:'postgres',
          password:'postgres',
          database:'event_db',
          entities:[Event],
          synchronize:true
        }),TypeOrmModule.forFeature([Event])
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
