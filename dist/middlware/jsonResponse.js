"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse = (req, res, next) => {
    res.set("Content-Type", "application/json");
    next();
};
exports.default = jsonResponse;
