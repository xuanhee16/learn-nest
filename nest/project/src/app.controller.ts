//express에서의 route 파일이 여기서는 컨트롤러 파일이 된다.
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats') //소괄호 안에 사용하려고 하는 endpoint를 넣고('cats'를 넣었다고 가정할시) http://localhost:8000/cats get 조회 하면 읽힌다.
export class AppController {
  constructor(private readonly appService: AppService) {}

  //router.get("/", ...) => @Get("/") getHello() ...
  @Get('hello/:id/:name') //여기 소괄호 안에도 쓰게 되면 controller에 있는 엔드포인트 뒤로 쓰여지게 된다. ('hello'를 넣었다고 가정할시)  http://localhost:8000/cats/hello
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    //요청객체
    console.log(req);
    console.log(Body);
    console.log(param);
    // const body = req.body;
    // req.params
    // 서비스에서 리턴값으로 받은 값을 모듈로 다시 보내진다.
    // return 'hello world~';
    return this.appService.getHello(); //getHello()를 누르면 app.service.ts로 이동한다.
  }
}
