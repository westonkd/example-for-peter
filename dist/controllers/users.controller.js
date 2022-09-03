"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.index = exports.show = exports.authRedirect = void 0;
const users_1 = __importDefault(require("../models/users"));
const logger_1 = __importDefault(require("../lib/logger"));
const authRedirect = async (req, res) => {
    // TODO: handle auth errors
    const authedUser = req.oidc?.user;
    let user = await users_1.default.findOne({ email: authedUser?.email });
    if (!user) {
        // TODO: error handling
        user = await users_1.default.create({
            email: authedUser?.email,
            firstName: authedUser?.given_name,
            lastName: authedUser?.family_name,
            events: [],
        });
        (0, logger_1.default)().info(`Created new user with email ${user.email}`);
    }
    res.json(JSON.stringify(user));
};
exports.authRedirect = authRedirect;
const show = (req, res) => {
    res.json({});
};
exports.show = show;
const index = (req, res) => {
    res.json([{}]);
};
exports.index = index;
const update = (req, res) => {
    res.json({});
};
exports.update = update;
const destroy = (req, res) => {
    res.json({});
};
exports.destroy = destroy;
