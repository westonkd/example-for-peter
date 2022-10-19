import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import { create } from "../../controllers/meal.controller";

const userRoutes = (router: Router): Router => {
  router.use(jsonResponse);

  router.post("/", create);

  return router;
};

export default userRoutes;
