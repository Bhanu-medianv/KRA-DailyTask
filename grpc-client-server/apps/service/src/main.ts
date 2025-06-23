import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './my-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MyAppModule,{
    transport:Transport.GRPC,
    options:{
      package:'calculator',
      protoPath:join(__dirname ,'../../../protos/calculator.proto'),
      url:'localhost:50051'
    }
  });

  await app.listen();
}
bootstrap();
