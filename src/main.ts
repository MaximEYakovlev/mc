import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DOCUMENT_OPTIONS } from './common/constants';
import { SERVER_RUNNING } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(DOCUMENT_OPTIONS.TITLE)
    .setDescription(DOCUMENT_OPTIONS.DESCRIPTION)
    .setVersion(DOCUMENT_OPTIONS.VERSION)
    .addTag(DOCUMENT_OPTIONS.TAG)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`${SERVER_RUNNING}: ${await app.getUrl()}`);
}
bootstrap();
