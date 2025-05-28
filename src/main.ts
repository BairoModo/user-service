import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('User API CRUD')
    .setVersion('1.0')
    .addTag('users')
    .build();
    const documentFactory = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);
    
    const jsonCollectionFoExport = JSON.stringify(documentFactory, null, 2);
    if(process.env.EXPORT_OPEN_API === 'true') {
      console.log(`📋 Spesification OpenAPI exported for Bruno: ${jsonCollectionFoExport}`);
    }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
