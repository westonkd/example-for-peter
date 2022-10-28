import { Request, Response, NextFunction } from "express";
import fairytale from "../models/fairytales";

const create = async (req: Request, res: Response, next: NextFunction) => {
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

  const {   title, authorFirst, authorLast, listPrice, img_url, description, publishedDate, isbn, reviews } = req.body;

  try {
    const response = await fairytale.create({ 
      title, authorFirst, authorLast, listPrice, img_url, description, publishedDate, isbn, reviews });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const index = async (req: Request, res: Response, next: NextFunction) => {
  const { review } = req.query;

  try {
    const fairytales = await fairytale.find({ "review.name": review });
    res.json(fairytales);
  } catch (error) {
    next(error);
  }
};

export { create, index };
