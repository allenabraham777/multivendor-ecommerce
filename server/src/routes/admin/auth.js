import { Router } from "express";
import { signin, signup } from "../../controllers/admin/auth.js";
import {
  isRequestValidated,
  validateSigninRequest,
  validateSignupRequest,
} from "../../utils/validators/auth.js";

const router = Router();

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

// router.get("/profile", isLoggedIn, (req, res) => {
//   res.status(200).json({ user: req.user });
// });

export default router;
