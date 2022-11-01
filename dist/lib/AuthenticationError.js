"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenticationError extends Error {
    constructor(message) {
        super(`Authentication Error: ${message}`);
    }
}
exports.default = AuthenticationError;
