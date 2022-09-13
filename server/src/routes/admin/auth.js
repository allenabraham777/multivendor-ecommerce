import { Router } from "express";
import { signin, signup } from "../../controllers/admin/auth.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

// router.get("/profile", isLoggedIn, (req, res) => {
//   res.status(200).json({ user: req.user });
// });

export default router;
