"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = __importDefault(require("../db.config"));
const logger_1 = __importDefault(require("../../lib/logger"));
const database = {
    initialize: async () => {
        try {
            (0, logger_1.default)().info("Connecting to database...");
            await mongoose_1.default.connect(db_config_1.default.url);
        }
        catch (e) {
            (0, logger_1.default)().error(`Error connecting to database: ${e}`);
            return false;
        }
        (0, logger_1.default)().info("Connected to database.");
        return true;
    },
};
exports.default = database;
