import express from "express";

import {
  getRecipe,
  getFoods,
  postFood,
  updateFood,
  deleteFood,
  likePost,
} from "../controllers/food.js";

const router = express.Router();

router.get("/foods", getFoods);
router.get("/food/:id", getRecipe);
router.post("/foods", postFood);
router.patch("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);
router.patch("/:id/likePost", likePost);

export default router;
