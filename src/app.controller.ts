import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from "axios";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
