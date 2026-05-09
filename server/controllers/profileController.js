//create profile controller
import Profile from "../models/Profile.js";

const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create({
      ...req.body,
      profileImage: req.files?.profileImage?.[0]?.path || "",
      resume: req.files?.resume?.[0]?.path || "",
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};



//get profile controller
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    res.status(200).json({
      profile,
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
    const updateData = {
      ...req.body,
    };

    if (req.files?.profileImage) {
      updateData.profileImage =
        req.files.profileImage[0].path;
    }

    if (req.files?.resume) {
      updateData.resume =
        req.files.resume[0].path;
    }

    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json({
      message: "Profile updated successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export {
  createProfile,
  getProfile,
  updateProfile
};