import { Controller, Get } from "@nestjs/common";

@Controller()
export class QnaController {
  constructor () {}

  @Get()
  getQnaList (): Promise<string> {
    return
  }
}