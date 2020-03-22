import { Module } from '@nestjs/common';
import { ReferenceController } from './controller/Reference.controller';
import { AppService } from './service/app.service';
import { ReferenceService } from './service/Reference.service';

@Module({
  imports: [],
  controllers: [ReferenceController],
  providers: [
    AppService, ReferenceService
  ],
})
export class AppModule {}
