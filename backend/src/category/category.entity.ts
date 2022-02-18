import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CategoryStatus } from "./category.model";
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