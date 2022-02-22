import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategorysFilterDto } from './dto/get-category-filter.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
@Controller('category')
// auth gard later
@UseGuards(AuthGuard())
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    //@GetUser() user:User,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  getCategory(@Query() filterDto: GetCategorysFilterDto,
  //@GetUser() user: User,
  ): Promise<Category[]> {
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
