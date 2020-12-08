import {Connection, createConnection} from "typeorm";
import {Drinks} from "../entity/Drinks";

export default class ListDrinksOrderByName {

    // https://typeorm.io/#/connection/creating-a-new-connection
    async getSortedByName(take: number): Promise<Drinks[]> {

        const connection: Connection = await createConnection();

        return await connection
            .getRepository(Drinks)
            .find({
                select: ['id', 'name', 'alcoholic', 'category'],
                take: take,
                relations: ['category']
            })
    }
}