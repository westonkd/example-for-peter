"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../../controllers/auth.controller");
const authRoutes = (router) => {
    router.get("/login", auth_controller_1.login);
    return router;
};
exports.default = authRoutes;
