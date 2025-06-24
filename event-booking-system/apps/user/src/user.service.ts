import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { userDto } from 'libs/dtos/user/user.dto';
import { loginDto } from 'libs/dtos/user/login.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>
  ){}
  
  async createUser(userData:userDto):Promise<User>{
      const new_user =  this.userRepository.create(userData)
      return await this.userRepository.save(new_user)
  }

  async getUser():Promise<User[]>{
    return await this.userRepository.find()
  }

  async getUserById(id:number):Promise<User|null>{
    
    const user  = this.userRepository.findOne({where:{user_id:id}})
    if (!user){
      throw new NotFoundException("user doesn't exist")
    } 
    return user
  }
  async login(loginData:loginDto):Promise<User|null>{
        const user = await this.userRepository.findOne({where:{email:loginData.email}})
        if(!user){
          throw new NotFoundException('user does not exist')
        }
        if(user.password !==loginData.password){
              throw new UnauthorizedException('Incorrect password')
        }
        return user
  }

}
