import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategorysFilterDto } from './dto/get-category-filter.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
// auth gard later
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  getCategory(@Query() filterDto: GetCategorysFilterDto): Promise<Category[]> {
    return this.categoryService.getCategory(filterDto);
  }

  @Get('/:id')
  getCategoryById(
    @Param('id') id: string /*add categ in product*/,
  ): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  @Delete('/:id')
  deleteCategory(
    @Param('id') id: string,
    /*add categ in product*/
  ): Promise<void> {
    return this.categoryService.deleteCategory(id);
  }

  @Patch('/:id/description')
  updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const { description } = updateCategoryDto;
    return this.categoryService.updateCategory(id, description);
  }
}
