import User from "../models/user.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email }).exec();
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });

    const data = await _user.save();

    if (!data) {
      throw new Error("signup: User creartion failed");
    }

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!!!" });
  }
};

const signin = async (req, res) => {
  try {
    const { email: _email, password: _password } = req.body;

    const user = await User.findOne({ email: _email }).exec();
    if (!user) {
      throw new Error("signin: User not found");
    }
    const authenticated = user.authenticate(_password);

    if (!authenticated) {
      throw new Error("signin: User authentication failed");
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { _id, firstName, lastName, email, role, fullName } = user;

    res.status(200).json({
      token,
      user: { _id, firstName, lastName, email, role, fullName },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!!!" });
  }
};

export { signup, signin };
