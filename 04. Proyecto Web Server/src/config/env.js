// *** Versiones anteriores ***
// require("dotenv").config();
// const { get } = require("env-var");

// *** EcmaScript 6 ***
import env from "dotenv";
import envvar from "env-var";

env.config();

// *** EcmaScript 6 ***
export const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString(),
};

// *** Versiones anteriores ***
// module.exports = {
//   envs,
// };
