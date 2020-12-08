import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Drinks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @Column()
    glass: string;


    @Column()
    alcoholic: string;


    @Column({nullable: true})
    thumbnail: string;


    @Column()
    instructions: string;


    @ManyToOne(() => Category, category => category.drinks)
    category: Category;

}
