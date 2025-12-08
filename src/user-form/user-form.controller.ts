import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserFormService } from './user-form.service';
import { Step2Dto } from './dto/step2.dto';
import { Step1Dto } from './dto/step1.dto';

@Controller('form')
export class UserFormController {
  constructor(private readonly service: UserFormService) {}

  @Post('step1')
  step1(@Body() dto: Step1Dto) {
    return this.service.saveStep1(dto);
  }

  @Post(':fromId/step2')
  step2(@Param('fromId', ParseIntPipe) fromId: number, @Body() dto: Step2Dto) {
    return this.service.saveStep2(dto, fromId);
  }

  @Post(':fromId/complete')
  complete(@Param('fromId', ParseIntPipe) fromId: number) {
    return this.service.submit(fromId);
  }
  
@Get(':formId/:step')
getStep(
  @Param('formId', ParseIntPipe) formId: number,
  @Param('step', ParseIntPipe) step: number
) {
  return this.service.getStep(formId, step);
}

}
