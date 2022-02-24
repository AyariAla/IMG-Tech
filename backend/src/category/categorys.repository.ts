import { EntityRepository, getManager, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategorysFilterDto } from './dto/get-category-filter.dto';
@EntityRepository(Category)
export class CategorysRepository extends Repository<Category> {
  async getCategory(filterDto: GetCategorysFilterDto): Promise<Category[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('category');
    if (search) {
      query.andWhere(
        'LOWER(category.name) LIKE LOWER(:search) OR LOWER(category.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }
    const categorys = await query.getMany();
    return categorys;
  }

  async createCategory(createCategory: CreateCategoryDto): Promise<Category> {
    const { name, description } = createCategory;
    const category = this.create({
      name,
      description,
    });
    await this.save(category);
    return category;
  }
}
