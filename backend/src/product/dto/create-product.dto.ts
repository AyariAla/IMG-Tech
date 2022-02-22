import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

export class CreateProductdto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  category: number;
}
