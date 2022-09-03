import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import {
  authRedirect,
  show,
  index,
  update,
  destroy,
} from "../../controllers/users.controller";

const userRoutes = (router: Router): Router => {
  router.use(jsonResponse);

  router.get("/redirect", authRedirect);
  router.get("/:id", show);
  router.get("/", index);
  router.put("/:id", update);
  router.delete("/:id", destroy);

  return router;
};

export default userRoutes;
