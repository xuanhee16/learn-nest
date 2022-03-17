import { Controller, Get, Patch, Post, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {} // DI(의존성 주입)
  // CatsController라는 소비자가 catsService라는 것을 주입 받은 것
  // 공급자는 모듈의 Providers인 CatsService가 된다.

  // cats/
  @Get()
  getAllCat() {
    return 'all cat';
  }

  // cats/id
  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return;
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
