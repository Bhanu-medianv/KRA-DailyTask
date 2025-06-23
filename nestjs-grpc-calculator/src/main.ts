import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const port  = process.env.PORT ?? 3000
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
   {
    transport:Transport.GRPC,
    options:{
      package:'calculator',
      protoPath:join(__dirname,'../calculator.proto'),
      url:`0.0.0.0:${port}`
    }
   }
  );
  await app.listen();
}
bootstrap();
