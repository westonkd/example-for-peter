import express from "express";
import cors from "cors";

import logger from "./lib/logger";
import appConfig from "./config/application.config";
import database from "./config/initializers/db.init";
import useRoutes from "./config/routes";

const app = express();

// global middleware
app.use(cors(), express.json());

useRoutes(app);

database.initialize().then(() => {
  app.listen(appConfig.port, () => {
    logger().info(`Application started on ${appConfig.port}`);
  });
});
