import {Category} from "../../entity/Category";
import {getRepository} from "typeorm";

const axios = require('axios').default;

export default class DrinksByCategoryProvider {

    private readonly API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

    public async provide(): Promise<Map<number, string[]>> {

        return await this.bulkDownloadByCategories(await getRepository(Category).find())
    }

    private async bulkDownloadByCategories(categories: Category[]): Promise<Map<number, string[]>> {

        let data = new Map()

        for (const category of categories) {
            const response = await axios.get(this.API + '?c=' + category.name)

            data.set(category.id, response['data']['drinks'].map(drink => {
                return drink['idDrink']
            }))
        }

        return data
    }

}