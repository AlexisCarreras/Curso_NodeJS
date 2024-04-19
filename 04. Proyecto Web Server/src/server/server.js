// *** Versiones anteriores ***
// const express = require("express");
// const path = require("path");

// *** EcmaScript 6 ***
import express from "express";
import path from "path";

export const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  // Para poder usar Middlewares se usa la palaabra use (express)
  app.use(express.static(public_path)); // Contenido estático que ponemos disponible

  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
  });
};

// *** Versiones anteriores ***
// module.exports = {
//   startServer,
// };
