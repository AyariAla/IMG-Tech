import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { CategoryStatus } from './category.model';
import { Product } from 'src/product/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ type: 'varchar' })
  description: CategoryStatus;

  @OneToMany(
    (_type) => Product,
    (product) => product.category ,
  )
  product: Product[];

  
}
