// *** Versiones anteriores ***
// const { envs } = require("./config/env");
// const { startServer } = require("./server/server");

// *** EcmaScript 6 ***
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

// Función agnóstica autoconvocada
// Agnóstica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
(async () => {
  main();
})();
