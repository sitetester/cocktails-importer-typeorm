import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Drinks} from "./Drinks";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Drinks, drinks => drinks.category)
    drinks: Drinks[];
}
