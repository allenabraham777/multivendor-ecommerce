import { check, validationResult } from "express-validator";

const validateSignupRequest = [
  check("firstName").notEmpty().withMessage("firstName is required"),
  check("lastName").notEmpty().withMessage("lastName is required"),
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("valid email is required"),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const validateSigninRequest = [
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("valid email is required"),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req).array();
  if (errors.length > 0) {
    return res.status(400).json({ message: errors[0].msg });
  }
  next();
};

export { validateSignupRequest, validateSigninRequest, isRequestValidated };
