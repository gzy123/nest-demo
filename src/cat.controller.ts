import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  @Post()
  create() {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Req() request: Request): string {
    return `This action returns all cats ${request}`;
  }
  @Get('/onecat/:name')
  // 通过ApiParam装饰器，来描述接口需要哪些参数
  @ApiParam({ name: 'name', type: String, description: '姓名' })
  @ApiParam({ name: 'age', type: String, description: '年纪' })
  aGetRequest(@Param('name') name: string, @Param('age') age: string): string {
    return `a named ${name} has lunched a get request, his age is ${age}`;
  }
}
