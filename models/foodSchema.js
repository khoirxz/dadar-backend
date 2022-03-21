import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  ingredients: [],
  steps: [],
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const FoodModel = mongoose.model("FoodSchema", foodSchema);

export default FoodModel;
