import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

// 여기 있는 모듈들이 최종적으로 main.ts로 이동하게 된다.
@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController], //사용자가 공급받아서 사용
  providers: [AppService], // 공급자가 사업자등록
})
export class AppModule {}
