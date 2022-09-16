import { Router } from "express";
import authRoutes from "./auth.js";
import adminRoutes from "./admin/index.js";
import categoryRoutes from "./category.js";
import cartRoutes from "./cart.js";
import productRoutes from "./product.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

export default router;
