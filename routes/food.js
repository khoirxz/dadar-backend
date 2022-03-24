import express from "express";

import {
  getRecipe,
  getFoods,
  postFood,
  updateFood,
} from "../controllers/food.js";

const router = express.Router();

router.get("/foods", getFoods);
router.get("/food/:id", getRecipe);
router.post("/foods", postFood);
router.patch("/food/:id", updateFood);

export default router;
