// ***** Import y Exports *******

// // ECMASCRIPT 6
// import { getTitle, getAuthor } from "./functions.js";
// import { curso } from "./objects.js";

// // ECMASCRIPT LEGACY
// // const { getTitle, getAuthor } = require("./functions");
// // const { curso } = require("./objects");

// const { autor, nombre } = curso

// console.log(getTitle());
// console.log(getAuthor("Alexis"));

// console.log(autor);
// console.log(nombre);

// ******* Variables de Entorno *******
import { config } from "dotenv";
import env from "env-var";

config();
const PORT = env.get("PORT").required().asPortNumber();

console.log(PORT);

console.log(process.env.PORT);
console.log(process.env.API_SERVICE);

console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
