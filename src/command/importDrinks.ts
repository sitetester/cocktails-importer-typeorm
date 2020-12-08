#!/usr/bin/env node

import DrinksImporter from "../service/importer/drinksImporter";
import {createConnection} from "typeorm";

const chalk = require('chalk');
console.log('Importing drinks...')

// https://stackoverflow.com/questions/42186674/typeorm-how-to-use-connection-as-standalone-object-with-types
// just use createConnection method to create your connection when you bootstrap your application.
// later you can access your connection from anywhere using getConnection() method:
createConnection()

// Also you can simply use getRepository method also available from anywhere:

new DrinksImporter().import()
    .then(() => {
        console.log(
            chalk.green("Success!")
        )
    })
    .catch(err => {
        console.log(
            chalk.red(`Something went wrong` + err.message)
        )
    })