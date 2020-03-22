import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ReferenceService } from "../service/Reference.service";

@Controller('/reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  @Get()
  getReferenceList(): Promise<string> {
    return this.referenceService.getReferenceList();
  }

  @Get(':id')
  getReference(@Param('id') id: number): Promise<string> {
    return this.referenceService.getReference(id);
  }
}
