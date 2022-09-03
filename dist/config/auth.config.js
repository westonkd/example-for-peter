"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authConfig = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL || `http://localhost:${process.env.PORT}`,
    clientID: process.env.AUTH_ZERO_CLIENT_ID || "",
    issuerBaseURL: process.env.AUTH_ZERO_URL || "",
    secret: process.env.AUTH_ZERO_CLIENT_SECRET || "",
    routes: {
        login: false, // Override for custom returnTo
    },
};
exports.default = authConfig;
