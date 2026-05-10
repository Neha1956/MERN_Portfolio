import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  title: {
    type: String,
  },

  about: {
    type: String,
  },

  skills: {
    type: [String],
  },

  profileImage: {
    type: String,
  },

  resume: {
    type: String,
  },

  socialLinks: {
    github: String,
    linkedin: String,
    
  },

  contact: {
    email: String,
    phone: String,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;