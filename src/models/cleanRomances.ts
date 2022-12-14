import { Schema, model } from "mongoose";

export interface IReviews {
  stars: string;
  content: string;
  person: string;
  reviewLocation: string;
}

export interface IcleanRomance {
  title: string;
  authorFirst: string;
  authorLast: string;
  listPrice: string;
  img_url: string;
  description: string;
  publishedDate: string;
  isbn: string;
  reviews: IReviews[];
}

const reviewsSchema = new Schema<IReviews>({
  stars: { type: String, required: false },
  content: { type: String, required: false },
  person: { type: String, required: false },
  reviewLocation: { type: String, required: false },
});

const cleanRomanceSchema = new Schema<IcleanRomance>({
  title: { type: String, required: false },
  authorFirst: { type: String, required: false },
  authorLast: { type: String, required: false },
  listPrice: { type: String, required: false },
  img_url: { type: String, required: false },
  description: { type: String, required: false },
  publishedDate: { type: String, required: false },
  isbn: { type: String, required: false },
  reviews: [reviewsSchema],
},
{ collection: "Clean_Romances" }
);

const cleanRomanances = model("CR", cleanRomanceSchema);

export default cleanRomanances;

// Query by value in array: https://kb.objectrocket.com/mongo-db/use-mongoose-to-find-in-an-array-of-objects-1206
