import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from './common/middlewares/logger.middleware';
// import { ResponseInterceptor } from './common/interceptors/response.interceptor';
// import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import cookieParser from 'cookie-parser';
import { setupSwagger } from './utils/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalInterceptors(new ResponseInterceptor());
  // app.useGlobalFilters(new AllExceptionsFilter());

  app.use(Logger);

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
