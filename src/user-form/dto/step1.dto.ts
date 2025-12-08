import { IsEmail, IsNotEmpty } from 'class-validator';

export class Step1Dto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
