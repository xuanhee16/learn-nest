//express에서의 route 파일이 여기서는 컨트롤러 파일이 된다.
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats') //소괄호 안에 사용하려고 하는 endpoint를 넣고('cats'를 넣었다고 가정할시) http://localhost:8000/cats get 조회 하면 읽힌다.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
