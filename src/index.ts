import "reflect-metadata";
import {createConnection} from "typeorm";

// https://stackoverflow.com/questions/42186674/typeorm-how-to-use-connection-as-standalone-object-with-types
// just use createConnection method to create your connection when you bootstrap your application.
// later you can access your connection from anywhere using getConnection() method:
createConnection()

console.log("INDEXXXXXXXXXXXXXXXXXXXX");

// Also you can simply use getRepository method also available from anywhere:
// https://stackoverflow.com/questions/49794140/connection-default-was-not-found-with-typeorm
/*
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;

    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
*/
