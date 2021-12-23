import express from "express";

import { getFoods, postFood } from "../controllers/food.js";

const router = express.Router();

router.get("/foods", getFoods);
router.post("/foods", postFood);

export default router;
