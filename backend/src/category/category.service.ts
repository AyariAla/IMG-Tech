import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategorysRepository } from './categorys.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategorysFilterDto } from './dto/get-category-filter.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategorysRepository)
        private categoryReposoitory: CategorysRepository,
    ){}

    getCategory(filterDto : GetCategorysFilterDto):Promise<Category[]>{
        return this.categoryReposoitory.getCategory(filterDto/*later in product i pass here the catgeory*/);
    }

    createCategory(createCategoryDto:CreateCategoryDto): Promise<Category>{
        return this.categoryReposoitory.createCategory(createCategoryDto);
    }



}
