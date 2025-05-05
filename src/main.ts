import { NestFactory } from '@nestjs/core';
import { AppModule, configureApp } from 'app.module';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureApp(app);
  await app.listen(3000);
})();
