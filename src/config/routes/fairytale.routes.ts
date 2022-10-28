import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import { create, index } from "../../controllers/fairtytale.controller";

const router = Router();

router.use(jsonResponse);

router.get("/api/v1/fairytale", index);
router.post("/api/v1/fairytale", create);

export default router;
