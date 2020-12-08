import {createConnection} from "typeorm";
import ListDrinksOrderByName from "../service/ListDrinksOrderByName";

require('console.table');
// https://stackoverflow.com/questions/42186674/typeorm-how-to-use-connection-as-standalone-object-with-types
// just use createConnection method to create your connection when you bootstrap your application.
// later you can access your connection from anywhere using getConnection() method:
createConnection()

// Also you can simply use getRepository method also available from anywhere:

const take = 5
console.info(`Showing only ${take} drinks...`)

// https://www.npmjs.com/package/console.table
new ListDrinksOrderByName().getSortedByName(take)
    .then(data => {
        data.forEach(d => {
            console.log(d)
        })
    })


