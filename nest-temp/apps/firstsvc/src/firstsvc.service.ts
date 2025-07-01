import { Inject, Injectable } from '@nestjs/common';
import { User } from './Entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './DTO/user.dto';

@Injectable()
export class FirstsvcService {
  constructor( @InjectRepository(User) private readonly  userRepository:Repository<User>){}
  getHello(): string {
    
    return 'Hello World!';
  }
  async create(user:UserDto){
      const new_user =  this.userRepository.create(user)
      return await this.userRepository.save(new_user)
  }
}
