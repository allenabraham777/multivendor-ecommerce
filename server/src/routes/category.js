import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category.js";
import { isAdmin, isLoggedIn } from "../middlewares/auth.js";
import { uploadSingleFile } from "../middlewares/upload.js";

const router = Router();

router.get("/", getCategories);
//TODO: Add payload verification
router.post(
  "/",
  isLoggedIn,
  isAdmin,
  uploadSingleFile("categoryImage"),
  createCategory
);

//TODO: Add update and delete routes

export default router;
