import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
<<<<<<< HEAD
  app.enableCors();
  await app.listen(3001);
=======
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
>>>>>>> auth
}
bootstrap();
