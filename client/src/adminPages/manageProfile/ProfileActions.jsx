import { useState } from "react";
import { motion } from "motion/react";
import { FiEdit, FiTrash2, FiUser, FiLinkedin } from "react-icons/fi";

const ProfileActions = () => {
  const [profile, setProfile] = useState({
    name: "Neha Kumari",
    email: "neha@example.com",
    role: "Full Stack Developer (MERN)",
    bio: "I am a passionate developer building modern web apps.",
    linkedin: "https://linkedin.com/in/neha",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  });

  const handleDelete = () => {
    setProfile(null);
  };

  const handleEdit = () => {
    const newName = prompt("Enter new name:", profile.name);
    if (!newName) return;

    const newEmail = prompt("Enter new email:", profile.email);
    const newRole = prompt("Enter new role:", profile.role);
    const newBio = prompt("Enter new bio:", profile.bio);
    const newLinkedin = prompt("Enter LinkedIn URL:", profile.linkedin);
    const newSkills = prompt("Enter skills separated by comma:", profile.skills.join(", "));

    setProfile({
      name: newName,
      email: newEmail,
      role: newRole,
      bio: newBio,
      linkedin: newLinkedin,
      skills: newSkills ? newSkills.split(",").map(s => s.trim()) : [],
    });
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-xl text-red-400">Profile Deleted</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center text-3xl font-bold">
            <FiUser />
          </div>

          <h2 className="text-2xl font-bold mt-4 text-cyan-300">
            {profile.name}
          </h2>
          <p className="text-slate-400">{profile.email}</p>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-3">
          <div className="bg-slate-900/50 p-4 rounded-xl">
            <p className="text-sm text-slate-400">Role</p>
            <p className="text-white font-semibold">{profile.role}</p>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-xl">
            <p className="text-sm text-slate-400">Bio</p>
            <p className="text-white">{profile.bio}</p>
          </div>

          {/* Skills */}
          <div className="bg-slate-900/50 p-4 rounded-xl">
            <p className="text-sm text-slate-400 mb-2">Skills</p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-slate-900/50 p-4 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">LinkedIn</p>
              <a
                href={profile.linkedin}
                target="_blank"
                className="text-violet-400 flex items-center gap-2"
              >
                <FiLinkedin /> View Profile
              </a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleEdit}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition font-semibold"
          >
            <FiEdit /> Edit Profile
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold"
          >
            <FiTrash2 /> Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileActions;
