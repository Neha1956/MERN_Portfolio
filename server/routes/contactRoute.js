import express from "express";
import {
  sendMessage,
  getMessages,
  deleteMessage,
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

router.delete(
  "/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteMessage
);

export default router;