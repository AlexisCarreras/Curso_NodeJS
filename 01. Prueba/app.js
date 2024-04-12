const fs = require("fs");

const cancion = fs.readFileSync("cancion.txt", "utf-8");

const cancionModified = cancion.replace(/node.js/gi, "NodeJS");

fs.writeFileSync("cancion-modified.txt", cancionModified);
