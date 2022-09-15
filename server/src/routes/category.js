import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category.js";
import { isAdmin, isLoggedIn } from "../middlewares/auth.js";

const router = Router();

router.get("/", getCategories);
//TODO: Add payload verification
router.post("/", isLoggedIn, isAdmin, createCategory);

//TODO: Add update and delete routes

export default router;
