import { Exclude } from 'class-transformer';
import { Category } from 'src/category/category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(
    (_type) => Category,
    (category) => category.product /*{
    eager: false,
  }*/,
  )
  @Exclude({ toPlainOnly: true })
  category: Category;
}
