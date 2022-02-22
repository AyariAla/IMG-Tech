import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/category.entity';
import { CategorysRepository } from 'src/category/categorys.repository';
import {
  Connection,
  EntityRepository,
  getConnection,
  getManager,
  Repository,
} from 'typeorm';
import { CreateProductdto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { getRepository } from 'typeorm';
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  /*async createProduct(createProduct: CreateProductdto): Promise<Product> {
    const categoryReposoitory = getRepository(Category);
    const { name, price, quantity, category } = createProduct;
    const query = await getManager()
      .createQueryBuilder(Category, 'category')
      .where('category.name = :name', { name: category })
      .getOne();
    if (query) {
      const product = new Product();
      product.name = name;
      product.price = price;
      product.quantity = quantity;
      await this.save(product);
      query.product = [product];
      await categoryReposoitory.save(query);
    }
    return;
  }*/

  async createProduct(createProduct: CreateProductdto): Promise<Product> {
    const { name, price, quantity, category } = createProduct;
    const product = this.create({
      name,
      price,
      quantity,
    });
    console.log(product) ;
    await this.save(product);
    return product;
  }

  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('product');
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
