import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import { create } from "../../controllers/meals.controller";

const router = Router();

router.use(jsonResponse);

router.post("/api/v1/meals", create);

export default router;
