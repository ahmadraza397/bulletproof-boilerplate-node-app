const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./config/index");
require("./loaders/morgan")(app);
require("./loaders/cors")(app);
require("./loaders/db")();
require("./loaders/routes")(app);

async function startServer() {
  app
    .listen(config.port, () => {
      console.log(`
      ########################################
      🛡️  Server is listening on port: ${config.port}  🛡️
      ########################################
      `);
    })
    .on("error", (err) => {
      console.log("Server Starting Error: ", err);
      process.exit(1);
    });
}

startServer();
