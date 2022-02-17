import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategorysFilterDto } from './dto/get-category-filter.dto';

@Controller('category')
// auth gard later
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  createCategory(
    @Body()createCategoryDto: CreateCategoryDto): Promise<Category>{
      return this.categoryService.createCategory(createCategoryDto);
    }

  
  
  
  @Get()
  getCategory(
    @Query() filterDto: GetCategorysFilterDto
  ): Promise<Category[]>{
    return this.categoryService.getCategory(filterDto);
  }
}
