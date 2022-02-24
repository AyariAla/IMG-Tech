import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductdto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  createProduct(createProductDto: CreateProductdto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }

  getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    return this.productRepository.getProducts(filterDto);
  }

  async getProductById(id: string): Promise<Product> {
    const found = await this.productRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`task with ID"${id}not found`);
    }
    return found;
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.getProductById(id);
    const { price, quantity } = updateProductDto;
    return this.productRepository.updateProduct(id, updateProductDto, product);
  }
}
