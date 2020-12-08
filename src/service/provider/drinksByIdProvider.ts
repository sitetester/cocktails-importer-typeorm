import {Drinks} from "../../entity/Drinks";
import {Category} from "../../entity/Category";

const axios = require('axios').default;

export default class DrinksByIdProvider {

    private readonly API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

    public async provide(ids: string[], category: Category): Promise<Drinks[]> {

        return (await this.bulkDownloadIds(ids)).map(drink => {
            const drinks: Drinks = {
                id: drink['idDrink'],
                name: drink['strDrink'],
                glass: drink['strGlass'],
                alcoholic: drink['strAlcoholic'],
                thumbnail: drink['strDrinkThumb'],
                instructions: drink['strInstructions'],
                category: category
            }

            return drinks
        })
    }

    private async bulkDownloadIds(ids: string[]): Promise<object[]> {

        let drinks: object[] = [];
        for (const id of ids) {
            const response = await axios.get(this.API + '?i=' + id)
            const drink = response['data']['drinks'][0]
            drinks.push(drink)
        }

        return drinks
    }
}