import { Router } from "express";
import authRoutes from "./auth.js";
import adminRoutes from "./admin/index.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);

export default router;
