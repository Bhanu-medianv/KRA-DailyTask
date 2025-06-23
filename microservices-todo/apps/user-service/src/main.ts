import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices'
import path, { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserServiceModule,{
    transport:Transport.GRPC,
    options:{
      package:'user',
      protoPath:join(__dirname,'../proto/user.proto'),
      url:'localhost:3000'
    }
  });
  await app.listen();
}
bootstrap();
