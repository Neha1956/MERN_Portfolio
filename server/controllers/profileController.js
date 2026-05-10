//create profile controller
import Profile from "../models/Profile.js";

const createProfile = async (req, res) => {
  try {
    const parseJson = (value) => {
      if (!value) return undefined;
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    };

    const skills = parseJson(req.body.skills);
    const socialLinks = parseJson(req.body.socialLinks) || {};
    const contact = parseJson(req.body.contact) || {};

    const profile = await Profile.create({
      fullName: req.body.fullName,
      title: req.body.title,
      about: req.body.about,
      skills: Array.isArray(skills)
        ? skills
        : typeof skills === "string"
        ? skills.split(",").map((s) => s.trim())
        : [],
      socialLinks,
      contact,
      profileImage: req.files?.profileImage?.[0]?.path || "",
      resume: req.files?.resume?.[0]?.path || "",
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile,
    });
  } catch (error) {
    console.log(error);
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
    const { id } = req.params;

    const socialLinks = JSON.parse(req.body.socialLinks);
    const contact = JSON.parse(req.body.contact);

    const updatedData = {
      fullName: req.body.fullName,
      title: req.body.title,
      about: req.body.about,
      skills: req.body.skills?.split(",").map(s => s.trim()),

      socialLinks,
      contact,
    };

    // FILES (multer)
    if (req.files?.profileImage) {
      updatedData.profileImage = req.files.profileImage[0].path;
    }

    if (req.files?.resume) {
      updatedData.resume = req.files.resume[0].path;
    }

    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    res.json({
      message: "Profile updated successfully",
      profile: updatedProfile,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Update failed" });
  }
};

export {
  createProfile,
  getProfile,
  updateProfile
};