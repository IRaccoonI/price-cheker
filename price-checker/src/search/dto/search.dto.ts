import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class SearchDto {
  @IsString()
  @ApiProperty()
  search: string;
}

export class OutputSearchDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsNumber()
  @ApiProperty()
  totalRating: number;

  @IsNumber()
  @ApiProperty()
  averageRating: number;

  @IsString()
  @ApiProperty()
  imgSrc: string;

  @IsEnum(['dns'])
  @ApiProperty()
  market: string;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  title: string;
}
