import express from "express";
import appConfig from "./config/application.config";
import database from "./config/initializers/db.init";

const app = express();

database.initialize().then(() => {
  app.listen(appConfig.port, () => {});
});
