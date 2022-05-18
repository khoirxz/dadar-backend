import mongoose from "mongoose";
import FoodModel from "../models/foodSchema.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();

    res.status(201).json(foods);
  } catch (error) {
    res.status(409).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getRecipe = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const recipe = await FoodModel.find({ _id });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(409).json({
      status: "error",
      message: error.message,
    });
  }
};

export const postFood = async (req, res) => {
  const post = req.body;

  const newPost = new FoodModel(post);
  try {
    await newPost.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateFood = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ error: "error", message: "post not found" });

  const updatedPost = await FoodModel.findByIdAndUpdate(
    _id,
    { ...post, id: _id },
    {
      new: true,
    }
  );
  res.status(201).json(updatedPost);
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "error", message: "post not found" });

  await FoodModel.findByIdAndRemove(id);
  res.json({ message: "Deleted!" });
};
