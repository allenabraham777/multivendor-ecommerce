import { Router } from "express";
import { createProduct } from "../controllers/product.js";
import { isAdmin, isLoggedIn } from "../middlewares/auth.js";
import { uploadMultipleFile } from "../middlewares/upload.js";

const router = Router();

router.get("/", () => {});
//TODO: Add payload verification
router.post(
  "/",
  isLoggedIn,
  isAdmin,
  uploadMultipleFile("productPicture"),
  createProduct
);

//TODO: Add update and delete routes

export default router;
