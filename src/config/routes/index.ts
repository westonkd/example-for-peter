import express, { Application } from "express";
import { auth } from "express-openid-connect";

import requestLogger from "../../middlware/requestLogger";
import authConfig from "../auth.config";
import eventRoutes from "./event.routes";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";

const routes = (app: Application): void => {
  // Login, logout, etc. with Auth0
  app.use(auth(authConfig), requestLogger);

  // Custom auth routes
  app.use(authRoutes(express.Router()));

  // Events
  app.use("/api/v1/events", eventRoutes(express.Router()));

  // Users
  app.use("/api/v1/users", userRoutes(express.Router()));
};

export default routes;
