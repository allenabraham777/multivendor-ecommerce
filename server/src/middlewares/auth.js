import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1];
  if (!token) {
    return res.status(403).json({ message: "Please Login" });
  }
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (error) {
    console.error("isLoggedIn: Invalid token");
    return res.status(403).json({ message: "Invalid token" });
  }
  next();
};

const isUser = async (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

const isAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

export { isLoggedIn, isAdmin, isUser };
