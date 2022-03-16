import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 여기서 NestFactory로 받아서 자동으로 클라이언트가 해당하는 라우터에 들어가서 값을 받을 수 있게된다.
  await app.listen(8000);
}
bootstrap();
