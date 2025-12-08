import { IsBoolean, isNotEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Step2Dto {
  @IsString()
  @IsNotEmpty()
  favoriteColor: string;

  @IsNotEmpty()
  @IsString()
  favoriteGame: string;
}
