import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
@PrimaryGeneratedColumn('uuid')
id: string;
@Column()
name: string;
@Column()
description: String;


//relation here later 
//hide user data here
//
}