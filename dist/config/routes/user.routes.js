"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse_1 = __importDefault(require("../../middlware/jsonResponse"));
const users_controller_1 = require("../../controllers/users.controller");
const userRoutes = (router) => {
    router.use(jsonResponse_1.default);
    router.get("/redirect", users_controller_1.authRedirect);
    return router;
};
exports.default = userRoutes;
