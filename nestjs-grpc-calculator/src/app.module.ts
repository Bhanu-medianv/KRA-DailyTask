import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorService } from './calculator/calculator.service';
import { CalculatorController } from './calculator/calculator.controller';

@Module({
  imports: [],
  controllers: [AppController, CalculatorController],
  providers: [AppService, CalculatorService],
})
export class AppModule {}
