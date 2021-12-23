import FoodModel from "../models/foodSchema.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();

    res.status(201).json(foods);
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

export const postFood = (req, res) => {
  res.json({
    message: "recipes posted!",
  });
};
