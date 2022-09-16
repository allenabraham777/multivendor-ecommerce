import { Router } from "express";
import { addToCart } from "../controllers/cart.js";
import { isUser, isLoggedIn } from "../middlewares/auth.js";

const router = Router();

// router.get("/", getCategories);
//TODO: Add payload verification
router.post("/add", isLoggedIn, isUser, addToCart);

//TODO: Add update and delete routes

export default router;
