import express from "express";

import register from "../controllers/userContollers/register.js";
import login from "../controllers/userContollers/login.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
export default router;
