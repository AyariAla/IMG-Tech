import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorysRepository } from './categorys.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([CategorysRepository])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
