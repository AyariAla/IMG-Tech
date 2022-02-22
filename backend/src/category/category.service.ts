import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategorysRepository } from './categorys.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategorysFilterDto } from './dto/get-category-filter.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Body, Param } from '@nestjs/common';
import { CategoryStatus } from './category.model';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategorysRepository)
    private categoryReposoitory: CategorysRepository,
  ) {}

  getCategory(filterDto: GetCategorysFilterDto): Promise<Category[]> {
    return this.categoryReposoitory.getCategory(
      filterDto /*later in product i pass here the catgeory*/,
    );
  }

  createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryReposoitory.createCategory(createCategoryDto);
  }

  async getCategoryById(id: string): Promise<Category> {
    const found = await this.categoryReposoitory.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Category with ID"${id}not found`);
    }
    return found;
  }
  async deleteCategory(id: string): Promise<void> {
    const result = await this.categoryReposoitory.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
  async updateCategory(
    id: string,
    description: CategoryStatus,
    // later in product identify category
  ): Promise<Category> {
    const category = await this.getCategoryById(id);
    category.description = description;
    await this.categoryReposoitory.save(category);
    return category;
  }
}
