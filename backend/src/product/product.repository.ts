import { EntityRepository, getConnection, Repository } from 'typeorm';
import { CreateProductdto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(createProduct: CreateProductdto): Promise<Product> {
    const { name, price, quantity } = createProduct;
    const product = this.create({
      name,
      price,
      quantity,
    });
    await this.save(product);
    return product;
  }

  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('product');
    //query.where({ catg });
    /*if (status) {
      query.andWhere('task.status =: status', { status });
    }*/
    if (search) {
      query.andWhere('LOWER(product.name) LIKE LOWER(:search) ', {
        search: `%${search}%`,
      });
    }
    const products = await query.getMany();
    return products;
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
    product: Product,
    // later in product identify category
  ): Promise<Product> {
    const { price, quantity } = updateProductDto;
    const query = this.createQueryBuilder('product');
    if (price) {
      product.price = Number(price);
    }
    if (quantity) {
      product.quantity = Number(quantity);
    }
    await this.save(product);
    return product;
  }
}
