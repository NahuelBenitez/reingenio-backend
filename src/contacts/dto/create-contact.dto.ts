import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber, IsNumber } from 'class-validator';

export class CreateContactDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  provinceId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;
}