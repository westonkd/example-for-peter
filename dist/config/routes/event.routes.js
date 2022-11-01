"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse_1 = __importDefault(require("../../middlware/jsonResponse"));
const events_controller_1 = require("../../controllers/events.controller");
const eventRoutes = (router) => {
    router.use(jsonResponse_1.default);
    router.post("/", events_controller_1.create);
    router.get("/:id", events_controller_1.show);
    router.get("/", events_controller_1.index);
    router.put("/:id", events_controller_1.update);
    router.delete("/:id", events_controller_1.destroy);
    return router;
};
exports.default = eventRoutes;
