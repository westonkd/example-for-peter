"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewsSchema = new mongoose_1.Schema({
    stars: { type: String, required: false },
    content: { type: String, required: false },
    person: { type: String, required: false },
    reviewLocation: { type: String, required: false },
});
const fairytaleSchema = new mongoose_1.Schema({
    title: { type: String, required: false },
    authorFirst: { type: String, required: false },
    authorLast: { type: String, required: false },
    listPrice: { type: String, required: false },
    img_url: { type: String, required: false },
    description: { type: String, required: false },
    publishedDate: { type: String, required: false },
    isbn: { type: String, required: false },
    reviews: [reviewsSchema],
}, { collection: "Fairytales_and_Fantasy" });
const Fairytale = (0, mongoose_1.model)("fairytale", fairytaleSchema);
exports.default = Fairytale;
// Query by value in array: https://kb.objectrocket.com/mongo-db/use-mongoose-to-find-in-an-array-of-objects-1206
