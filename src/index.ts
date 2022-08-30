import express from "express";
import cors from "cors";

import appConfig from "./config/application.config";
import database from "./config/initializers/db.init";

import eventRoutes from "./config/routes/event.routes";

const app = express();

// global middleware
app.use(cors());

// Routers
app.use("/events", eventRoutes(express.Router()));

database.initialize().then(() => {
  app.listen(appConfig.port, () => {});
});
