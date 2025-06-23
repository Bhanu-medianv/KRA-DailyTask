import { Controller } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class CalculatorController {
    constructor(private readonly  calservice:CalculatorService){}
    @GrpcMethod('CalculatorService','Add')
    add({a,b}:{a:number , b:number}):{sum:number}{
        return this.calservice.add({a,b})
    }
}
