import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [ClientsModule.register([
    {
    name:'tcp_client',
    transport:Transport.TCP,
    options:{
      host:'localhost',
      port:3001
    }
  }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
