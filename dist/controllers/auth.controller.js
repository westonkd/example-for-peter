"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => res.oidc.login({ returnTo: "/api/v1/users/redirect" });
exports.login = login;
