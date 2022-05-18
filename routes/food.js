import express from "express";

import {
  getRecipe,
  getFoods,
  postFood,
  updateFood,
  deleteFood,
} from "../controllers/food.js";

const router = express.Router();

router.get("/foods", getFoods);
router.get("/food/:id", getRecipe);
router.post("/foods", postFood);
router.patch("/food/:id", updateFood);
router.patch("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);
router.delete("/sapi", getFoods);

export default router;
