//express에서의 route 파일이 여기서는 컨트롤러 파일이 된다.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //router.get("/", ...) => @Get("/") getHello() ...
  @Get()
  getHello(): string {
    return this.appService.getHello(); //getHello()를 누르면 app.service.ts로 이동한다.
    // 서비스에서 리턴값으로 받은 값을 모듈로 다시 보내진다.
  }
}
