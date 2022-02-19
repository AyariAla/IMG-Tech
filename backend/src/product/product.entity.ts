import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id : string ; 

    @Column()
    nam : string ; 

    @Column()
    Price : number ;

    @Column()
    quantity : number ;

    /*@Column()
    image : */
}