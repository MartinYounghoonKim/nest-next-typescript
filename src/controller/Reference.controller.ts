import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller('/reference')
export class ReferenceController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReferenceList(): Promise<string> {
    return this.appService.getHello();
  }
}
