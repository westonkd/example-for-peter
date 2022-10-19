import express, { Application, Request, Response, NextFunction } from "express";
import { auth, requiresAuth } from "express-openid-connect";

import requestLogger from "../../middlware/requestLogger";
import authConfig from "../auth.config";
import eventRoutes from "./event.routes";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import mealRoutes from "./meals.routes";
import logger from "../../lib/logger";

const routes = (app: Application): void => {
  // Login, logout, etc. with Auth0
  app.use(auth(authConfig), requestLogger);

  // Custom auth routes
  app.use(authRoutes(express.Router()));

  // Events
  app.use("/api/v1/events", requiresAuth(), eventRoutes(express.Router()));

  // Users
  app.use("/api/v1/users", userRoutes(express.Router()));

  app.use("/api/v1/meals", mealRoutes(express.Router()));

  // Custom 404 handler
  app.use((_req: Request, res: Response): void => {
    res.status(404).json({ error: "not found" });
  });

  // See http://expressjs.com/en/guide/error-handling.html
  app.use(
    (error: Error, req: Request, res: Response, _next: NextFunction): void => {
      res.status(500);

      logger().error(error.message);

      if (app.get("env") === "development") {
        res.json({
          message: error.message,
          error: error.stack,
        });
      }

      res.json({ error: "Application error, please contact support." });
    }
  );
};

export default routes;
