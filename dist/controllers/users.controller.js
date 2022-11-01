"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRedirect = void 0;
const users_1 = __importDefault(require("../models/users"));
const logger_1 = __importDefault(require("../lib/logger"));
const AuthenticationError_1 = __importDefault(require("../lib/AuthenticationError"));
/* Note:
 * To simulate app sessions, copy the appSession cookie value and
 * and use it in Insomnia via the "manage cookies" menu
 */
const authRedirect = async (req, res) => {
    const authedUser = req.oidc?.user;
    if (!authedUser)
        throw new AuthenticationError_1.default("Failed to log in user");
    let user = await users_1.default.findOne({ email: authedUser?.email });
    if (!user) {
        user = await users_1.default.create({
            email: authedUser?.email,
            firstName: authedUser?.given_name,
            lastName: authedUser?.family_name,
            events: [],
        });
        (0, logger_1.default)().info(`Created new user with email ${user.email}`);
    }
    // TODO: Respond with a JWT that can be used as an access token
    // with the api
    res.json(JSON.stringify(user));
};
exports.authRedirect = authRedirect;
