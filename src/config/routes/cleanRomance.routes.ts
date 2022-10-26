import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";
import { create, index } from "../../controllers/cleanRomance.controller";

const router = Router();

router.use(jsonResponse);

router.get("/api/v1/cleanRomances", index);
router.post("/api/v1/cleanRomances", create);

export default router;
