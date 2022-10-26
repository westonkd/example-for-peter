import { Schema, model } from "mongoose";

export interface IReviews {
  name: string;
  quantity: string;
}

export interface IcleanRomance {
  name: string;
  reviews: IReviews[];
}

const reviewsSchema = new Schema<IReviews>({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
});

const cleanRomanceSchema = new Schema<IcleanRomance>({
  name: { type: String, required: true },
  reviews: [reviewsSchema],
});

const cleanRomanances = model("CR", cleanRomanceSchema);

export default cleanRomanances;

// Query by value in array: https://kb.objectrocket.com/mongo-db/use-mongoose-to-find-in-an-array-of-objects-1206
