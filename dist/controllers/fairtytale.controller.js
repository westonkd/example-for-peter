"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.create = void 0;
const fairytales_1 = __importDefault(require("../models/fairytales"));
const create = async (req, res, next) => {
    /*
      #swagger.parameters["meal"] = {
          in: "body",
          description: "The meal to create",
          required: true,
          schema: {
            $name: "cookies",
            ingredients: [{name: "Milk", quantity: "1 Cup"}]
          }
      }
     */
    const { title, authorFirst, authorLast, listPrice, img_url, description, publishedDate, isbn, reviews } = req.body;
    try {
        const response = await fairytales_1.default.create({
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
        const fairytales = await fairytales_1.default.find({ "review.name": review });
        res.json(fairytales);
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
