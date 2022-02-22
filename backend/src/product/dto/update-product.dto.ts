import { IsOptional } from 'class-validator';
import { ProductStatus } from '../product-model';
export class UpdateProductDto {
  @IsOptional()
  price?: ProductStatus;
  @IsOptional()
  quantity?: ProductStatus;
}
