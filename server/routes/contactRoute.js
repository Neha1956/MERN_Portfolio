import express from "express";
import {
  sendMessage,
  getMessages,
} from "../controllers/contactController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/send", sendMessage);

router.get(
  "/messages",
  authMiddleware,
  adminMiddleware,
  getMessages
);

export default router;