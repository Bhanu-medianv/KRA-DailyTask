import { NestFactory } from '@nestjs/core';
import { SecondsvcModule } from './secondsvc.module';

async function bootstrap() {
  const app = await NestFactory.create(SecondsvcModule);
  await app.listen( 3002);
}
bootstrap();
