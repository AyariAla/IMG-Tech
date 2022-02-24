import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CategoryStatus } from './category.model';
import { Product } from 'src/product/product.entity';
import { Exclude } from 'class-transformer';

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
    (product) => product.category /*{ eager: true }*/,
  )
  product: Product[];

  //relation here later
  //hide user data here
  //
}
