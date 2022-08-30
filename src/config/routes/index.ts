import express, { Application } from "express";

import eventRoutes from "./event.routes";

const routes = (app: Application): void => {
  app.use("/events", eventRoutes(express.Router()));
};

export default routes;
