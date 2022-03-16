import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // code가 실행되는 곳 (비즈니스 로직 실행)
    return 'Hello World!';
    // 여기 있는 리턴값을 다시 컨트롤러가 받는다.
  }
}
