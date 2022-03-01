import { Body, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: 'postgres://zbpvxvgy:Dz-79hJ1HjBWlVB-AZXbxUVS8ujeOgr8@john.db.elephantsql.com/zbpvxvgy',
      synchronize: true,
      logging: true,

      entities: [User, Category, Product],
    }),
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
