import { Router } from "express";
import authRoutes from "./auth.js";
import adminRoutes from "./admin/index.js";
import categoryRoutes from "./category.js";
import productRoutes from "./product.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

export default router;
