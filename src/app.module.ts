import { INestApplication, Module, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { StatusController } from 'models/status/status.controller';
import * as pack from '../package.json';

@Module({
  imports: [],
  controllers: [StatusController],
})
export class AppModule {}

export function configureApp(app: INestApplication): INestApplication {
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('MyPolitics Polls API documentation')
    .setDescription(
      'This documentation contains all the API endpoints for myPolitics Polls service.',
    )
    .setVersion(pack.version)
    .addServer('http://localhost', 'local')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  return app;
}
