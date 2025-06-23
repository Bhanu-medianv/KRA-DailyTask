import { Module } from '@nestjs/common';
import { Server1Controller } from './server1.controller';
import { Server1Service } from './server1.service';

@Module({
  imports: [],
  controllers: [Server1Controller],
  providers: [Server1Service],
})
export class Server1Module {}
