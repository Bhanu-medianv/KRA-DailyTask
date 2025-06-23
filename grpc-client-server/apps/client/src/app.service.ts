import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
interface AddRequest{
  a:number;
  b:number
}
interface AddResponse{
    result:number
}
interface CalculatorService{
  Add(data:AddRequest):Observable<AddResponse>
}
@Injectable()
export class AppService implements OnModuleInit{
    private calculatorServices:CalculatorService
    constructor(@Inject('CALCULATOR_PAKAGE') private client:ClientGrpc){}
    onModuleInit() {
      this.calculatorServices = this.client.getService<CalculatorService>('CalculatorService')
    }
    addNumber(a:number , b:number){
      return this.calculatorServices.Add({a,b})
    }
}
  