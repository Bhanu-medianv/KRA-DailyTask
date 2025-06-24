import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'user-services' ,
        transport:Transport.TCP,
        options:{
          host:'localhost',
          port:3001
        }
      },
      {
        name:'event-services',
        transport:Transport.GRPC,
        options:{
          package:'event',
          protoPath:join(__dirname ,'../../../libs/protos/event.proto'),
          url:'localhost:3002'
        }
      }
    ])
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
