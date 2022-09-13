import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1];
  if (!token) {
    return res.status(400).json({ message: "Please Login" });
  }
  try {
    const { _id } = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id };
  } catch (error) {
    console.error("isLoggedIn: Invalid token");
    return res.status(400).json({ message: "Invalid token" });
  }
  next();
};

export { isLoggedIn };
