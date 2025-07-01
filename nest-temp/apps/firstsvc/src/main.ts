import { NestFactory } from '@nestjs/core';
import { FirstsvcModule } from './firstsvc.module';

async function bootstrap() {
  const app = await NestFactory.create(FirstsvcModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
