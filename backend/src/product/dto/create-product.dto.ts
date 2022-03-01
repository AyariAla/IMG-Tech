import { IsNotEmpty } from 'class-validator';

export class CreateProductdto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  categoryID: number;
}
