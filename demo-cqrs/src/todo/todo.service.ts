import { Injectable } from '@nestjs/common';


import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCommand } from './command/todo.command';
import { CreateQuery } from './query/todo.query';


@Injectable()
export class TodoService {
  constructor(private commandBus:CommandBus,
    private queryBus:QueryBus
  ){}
  
  create(createTodoDto:any) {
    return  this.commandBus.execute(new CreateCommand(createTodoDto?.title , createTodoDto?.description))
  }

  findAll() {
    return  this.queryBus.execute(new CreateQuery())
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: any) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
