import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './secondsvc.service';
import { Sign } from 'crypto';
import { SignInDto } from './Dto/signIn.dto';
@Controller()
export class SecondsvcController {
  constructor(private readonly secondsvcService:AuthService,
  ) {}

  @Post()
  signIn(@Body() credentials:SignInDto){
    return this.secondsvcService.signIn(credentials);
  }
}
