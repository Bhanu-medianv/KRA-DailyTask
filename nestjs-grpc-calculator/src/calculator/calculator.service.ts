import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
    add({a,b}:{a:number ;  b:number}):{sum:number}{
    return {sum:a+b}
  }
}
