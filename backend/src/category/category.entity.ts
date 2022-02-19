import { Column, Entity, PrimaryGeneratedColumn ,  ManyToOne } from "typeorm";
import { CategoryStatus } from "./category.model";
import { User } from "src/auth/user.entity";


@Entity()
export class Category{
@PrimaryGeneratedColumn('uuid')
id: string;
@Column()
name: string;
@Column({ type: 'varchar' })
description: CategoryStatus;




//relation here later 
//hide user data here
//
}