import { Schema, model } from "mongoose";

export interface IIngredient {
  name: string;
  quantity: string;
}

export interface IMeal {
  name: string;
  ingredients: IIngredient[];
}

const ingredientSchema = new Schema<IIngredient>({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
});

const mealSchema = new Schema<IMeal>({
  name: { type: String, required: true },
  ingredients: [ingredientSchema],
});

const meal = model("Meal", mealSchema);

export default meal;

// Query by value in array: https://kb.objectrocket.com/mongo-db/use-mongoose-to-find-in-an-array-of-objects-1206
