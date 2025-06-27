import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateHandler } from './command/command.handler';
import { queryHandler } from './query/query.handler';


@Module({
  imports:[CqrsModule.forRoot()],
  controllers: [TodoController],
  providers: [TodoService,CreateHandler,queryHandler ],
})
export class TodoModule {}
