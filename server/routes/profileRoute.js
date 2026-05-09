import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import upload from "../middleware/upload.js";
import { getProfile, updateProfile ,createProfile} from "../controllers/profileController.js";
const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]), createProfile);
router.get("/get", getProfile);
router.put("/update/:id", authMiddleware, adminMiddleware, upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]), updateProfile); 

export default router;

