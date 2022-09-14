import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category.js";
import { isAdmin, isLoggedIn } from "../middlewares/auth.js";

const router = Router();

router.get("/", getCategories);
router.post("/", isLoggedIn, isAdmin, createCategory);

export default router;
