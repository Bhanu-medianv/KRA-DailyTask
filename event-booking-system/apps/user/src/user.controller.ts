import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { loginDto } from 'libs/dtos/user/login.dto';
import { userDto } from 'libs/dtos/user/user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';



@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({cmd:'loginInfo'})
  login(@Payload() loginInfo:loginDto){
      return this.userService.login(loginInfo)
  }

  @MessagePattern({cmd:'register'} )
  CreateUser(@Payload() register:userDto ){
      return this.userService.createUser(register)
  }
  
  @MessagePattern({cmd:'userById'})
  getUserById(@Payload() id:number){
      return this.userService.getUserById(id)
  }
  
}
