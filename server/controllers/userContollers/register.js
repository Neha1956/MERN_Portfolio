import user from "../../models/user.js";
import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        user: req.body,

      });
    }

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        existingUser,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await user.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "Signup successful, please login",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default register;