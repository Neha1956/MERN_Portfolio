//create profile controller
import Profile from "../models/Profile.js";
import { sendDataUri, toDataUri } from "../utils/assets.js";
import { access } from "node:fs/promises";
import path from "node:path";

const parseJsonField = (value, fallback) => {
  if (value === undefined || value === "") {
    return fallback;
  }

  if (typeof value !== "string") {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const parseSkills = (value) => {
  const parsed = parseJsonField(value, []);
  const joined = Array.isArray(parsed) ? parsed.join(",") : parsed;
  let skills = Array.isArray(parsed)
    ? parsed
    : typeof parsed === "string"
    ? parsed.split(",")
    : [];

  if (typeof joined === "string" && joined.trim().startsWith("[")) {
    const normalized = parseJsonField(joined, null);
    if (Array.isArray(normalized)) {
      skills = normalized;
    }
  }

  return skills
    .flatMap((skill) => String(skill).split(","))
    .map((skill) => skill.trim().replace(/^[\s"'[\]]+|[\s"'[\]]+$/g, ""))
    .filter(Boolean);
};

const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create({
      fullName: req.body.fullName,
      title: req.body.title,
      about: req.body.about,
      skills: parseSkills(req.body.skills),
      socialLinks: parseJsonField(req.body.socialLinks, {}),
      contact: parseJsonField(req.body.contact, {}),
      profileImage: req.files?.profileImage?.[0]
        ? toDataUri(req.files.profileImage[0])
        : "",
      resume: req.files?.resume?.[0] ? toDataUri(req.files.resume[0]) : "",
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile: toPublicProfile(profile),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const toPublicProfile = (profile) => {
  if (!profile) {
    return null;
  }

  const result = profile.toObject();
  result.skills = parseSkills(result.skills);
  if (result.profileImage?.startsWith("data:") || result.profileImage?.startsWith("uploads/") || result.profileImage?.startsWith("uploads\\")) {
    result.profileImage = `/api/profile/asset/${result._id}/profileImage`;
  }
  if (result.resume?.startsWith("data:") || result.resume?.startsWith("uploads/") || result.resume?.startsWith("uploads\\")) {
    result.resume = `/api/profile/asset/${result._id}/resume`;
  }
  return result;
};

//get profile controller
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    res.status(200).json({
      profile: toPublicProfile(profile),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//update profile controller

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = {
      fullName: req.body.fullName,
      title: req.body.title,
      about: req.body.about,
      skills: parseSkills(req.body.skills),
      socialLinks: parseJsonField(req.body.socialLinks, {}),
      contact: parseJsonField(req.body.contact, {}),
    };

    if (req.files?.profileImage?.[0]) {
      updatedData.profileImage = toDataUri(req.files.profileImage[0]);
    }

    if (req.files?.resume?.[0]) {
      updatedData.resume = toDataUri(req.files.resume[0]);
    }

    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found." });
    }

    res.json({
      message: "Profile updated successfully",
      profile: toPublicProfile(updatedProfile),
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Update failed" });
  }
};

const getProfileAsset = async (req, res) => {
  try {
    const { id, field } = req.params;
    if (!["profileImage", "resume"].includes(field)) {
      return res.status(404).json({ message: "Asset not found." });
    }

    const profile = await Profile.findById(id).select(field);
    if (!profile) {
      return res.status(404).json({ message: "Asset not found." });
    }

    if (sendDataUri(res, profile[field], { attachment: field === "resume" })) {
      return;
    }

    const legacyPath = profile[field]?.replace(/\\/g, "/");
    if (!legacyPath?.startsWith("uploads/")) {
      return res.status(404).json({ message: "Asset not found." });
    }

    const fileName = path.basename(legacyPath);
    if (!fileName || fileName !== legacyPath.slice("uploads/".length)) {
      return res.status(404).json({ message: "Asset not found." });
    }

    const filePath = path.resolve(process.cwd(), "uploads", fileName);
    await access(filePath);
    if (field === "resume") {
      res.set("Content-Disposition", "attachment");
    }
    return res.sendFile(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      return res.status(404).json({ message: "Asset not found." });
    }
    console.error("Failed to load profile asset:", error);
    res.status(500).json({ message: "Failed to load profile asset." });
  }
};

export {
  createProfile,
  getProfile,
  updateProfile,
  getProfileAsset,
};