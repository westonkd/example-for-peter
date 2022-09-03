"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_openid_connect_1 = require("express-openid-connect");
const requestLogger_1 = __importDefault(require("../../middlware/requestLogger"));
const auth_config_1 = __importDefault(require("../auth.config"));
const event_routes_1 = __importDefault(require("./event.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const routes = (app) => {
    // Login, logout, etc. with Auth0
    app.use((0, express_openid_connect_1.auth)(auth_config_1.default), requestLogger_1.default);
    // Custom auth routes
    app.use((0, auth_routes_1.default)(express_1.default.Router()));
    // Events
    app.use("/api/v1/events", (0, event_routes_1.default)(express_1.default.Router()));
    // Users
    app.use("/api/v1/users", (0, user_routes_1.default)(express_1.default.Router()));
};
exports.default = routes;
