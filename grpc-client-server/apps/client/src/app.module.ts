import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { register } from 'module';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([{
      name:'CALCULATOR_PACKAGE',
      transport:Transport.GRPC ,
      options:{
        package:'calculator',
        protoPath:join(__dirname, '../../../protos/calculator.proto'),
        url:'localhost:50051'
      }
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
