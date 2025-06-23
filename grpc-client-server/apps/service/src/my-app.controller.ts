import { Controller, Get } from '@nestjs/common';
import { MyAppService } from './my-app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class MyAppController {
  constructor(private readonly myAppService: MyAppService) {}

  @GrpcMethod('CalculatorService' ,'Add')
  add({a,b}:{a:number ,b:number}):{result:number}{
    return {result:a+b}
  }
}
