import { Router } from "express";

import jsonResponse from "../../middlware/jsonResponse";

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger-docs.json");
const router = require("express").Router();

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;