import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  if (process.env.NODE_ENV === 'production') {
    app.useStaticAssets(path.join(__dirname, '../..', 'web/dist'));
  }
  await app.listen(3000);
}

void bootstrap();
