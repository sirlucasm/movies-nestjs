import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { getFromContainer, MetadataStorage } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({whitelist: true, forbidNonWhitelisted: true })
  );

  const config = new DocumentBuilder()
    .setTitle('Movies Nestjs')
    .setDescription('Movies Catalogs API with NestJS application')
    .setVersion('1.0')
    .addTag('nestjs, movies, catalogs, api')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Creating all the swagger schemas based on the class-validator decorators
  const metadatas = (getFromContainer(MetadataStorage) as any).validationMetadatas;
  const schemas = validationMetadatasToSchemas(metadatas);

  document.components.schemas = schemas;

  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(PORT);
}
bootstrap();
