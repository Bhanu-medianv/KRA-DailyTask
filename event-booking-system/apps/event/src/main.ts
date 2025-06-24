import { NestFactory } from '@nestjs/core';
import { EventModule } from './event.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(EventModule,{
    transport:Transport.GRPC,
    options:{
      package:'event',
      protoPath:join(__dirname , '../../../libs/protos/event.proto'),
      url:'localhost:3002'
    }
  });
  await app.listen();
}
bootstrap();
