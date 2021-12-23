import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  title: String,
  desc: String,
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const FoodModel = mongoose.model("foodSchema", foodSchema);

export default FoodModel;
