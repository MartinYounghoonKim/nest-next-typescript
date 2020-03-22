import { Module } from '@nestjs/common';
import { ReferenceController } from './controller/Reference.controller';
import { AppService } from './service/app.service';

@Module({
  imports: [],
  controllers: [ReferenceController],
  providers: [AppService],
})
export class AppModule {}
