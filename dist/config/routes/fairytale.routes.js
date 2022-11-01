"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonResponse_1 = __importDefault(require("../../middlware/jsonResponse"));
const fairtytale_controller_1 = require("../../controllers/fairtytale.controller");
const router = (0, express_1.Router)();
router.use(jsonResponse_1.default);
router.get("/api/v1/fairytale", fairtytale_controller_1.index);
router.post("/api/v1/fairytale", fairtytale_controller_1.create);
exports.default = router;
