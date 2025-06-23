import { NestFactory } from '@nestjs/core';
import { Server1Module } from './server1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(Server1Module,{
    transport:Transport.TCP,
    options:{
      host:'localhost',
      port:3001
    }
  });
  await app.listen();
  console.log(' TCP Server is listening on port 3001');
}
bootstrap();
