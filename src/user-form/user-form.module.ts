import { Module } from '@nestjs/common';
import { UserFormService } from './user-form.service';
import { UserFormController } from './user-form.controller';

@Module({
  providers: [UserFormService],
  controllers: [UserFormController]
})
export class UserFormModule {}
