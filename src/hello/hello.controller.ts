import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) { }

  @Get()
  hello() {
    return this.helloService.hello();
  }

}
