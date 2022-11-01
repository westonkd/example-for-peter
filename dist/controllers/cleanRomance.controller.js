"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.create = void 0;
const cleanRomances_1 = __importDefault(require("../models/cleanRomances"));
const create = async (req, res, next) => {
    const { title, authorFirst, authorLast, listPrice, img_url, description, publishedDate, isbn, reviews } = req.body;
    try {
        const response = await cleanRomances_1.default.create({
            title, authorFirst, authorLast, listPrice, img_url, description, publishedDate, isbn, reviews
        });
        res.json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.create = create;
const index = async (req, res, next) => {
    const { review } = req.query;
    try {
        const cleanRomanances = await cleanRomances_1.default.find({ "review.name": review });
        res.json(cleanRomanances);
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
