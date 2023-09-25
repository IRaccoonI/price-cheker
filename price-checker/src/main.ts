import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const apiDescription = `
Use the Product Information API to access detailed product information, 
including title, price, seller details, and ratings, by providing the product's unique identifier. 
The Search Products API enables quick and efficient product searches on the marketplace, 
delivering a curated list of relevant items based on specified criteria
`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const http = configService.get('http');
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Spiders')
    .setDescription(apiDescription)
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  await app.listen(http.port, http.host);
}
bootstrap();
