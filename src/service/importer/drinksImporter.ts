import DrinksCategoriesImporter from "./drinksCategoriesImporter";
import DrinksByCategoryProvider from "../provider/drinksByCategoryProvider";
import DrinksByIdProvider from "../provider/drinksByIdProvider";
import {Drinks} from "../../entity/Drinks";
import {getRepository} from "typeorm";
import {Category} from "../../entity/Category";

export default class DrinksImporter {

    private drinksByCategoryProvider: DrinksByCategoryProvider
    private drinksByIdProvider: DrinksByIdProvider

    constructor() {
        this.drinksByCategoryProvider = new DrinksByCategoryProvider()
        this.drinksByIdProvider = new DrinksByIdProvider()
    }

    async import() {

        // download and persist categories
        await new DrinksCategoriesImporter().import()

        // drinks by each category ID
        const drinksByCategories = await this.drinksByCategoryProvider.provide();
        drinksByCategories.forEach(async (idDrinks, categoryId) => {

            let ids: string[] = []
            for (let i = 0; i < idDrinks.length; i++) {
                ids.push(idDrinks[i]);
            }

            const c = await getRepository(Category).findOne(categoryId)
            console.log(c)

            this.drinksByIdProvider.provide(ids, c).then(async drinks => {
                await getRepository(Drinks).save(drinks)
            })
        })
    }
}

