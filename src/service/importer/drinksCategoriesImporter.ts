import {Category} from "../../entity/Category";
import {getConnection} from "typeorm";

const axios = require('axios').default;

export default class DrinksCategoriesImporter {

    private readonly API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    // downloads and persists categories
    public async import(): Promise<Category[]> {

        let categories: Category[];

        const strCategories: string[] = await this.download()
        console.log("strCategories***********")

        categories = strCategories.map(strCategory => {
            const category = new Category()
            category.name = strCategory['strCategory']
            // return {'name': strCategory['strCategory']}
            return category
        })

        // https://typeorm.io/#/undefined/using-asyncawait-syntax
        await getConnection().getRepository(Category).save(categories)
        console.log("categories have been saved");


        return categories;
    }

    private async download(): Promise<string[]> {

        let categories: [] = []
        try {
            const response = await axios.get(this.API);
            categories = response['data']['drinks']
        } catch (error) {
            console.error(error);
        }

        return categories
    }
}