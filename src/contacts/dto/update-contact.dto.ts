import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsPhoneNumber, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  provinceId?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  
  phone?: string;
}