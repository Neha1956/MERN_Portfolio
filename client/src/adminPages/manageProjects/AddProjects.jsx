import { useState } from "react";
import { motion } from "motion/react";
import { FiUpload, FiLink, FiGithub, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/projectSlice";
import  axiosAPI  from "../../api/axiosAPI";

const AddProjects = () => {
    const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

try{
    if (!form.title || !form.description) {
        alert("Please fill in all required fields.");
        return;
      }
    const res = await axiosAPI.post(
    "/projects/add",
    form
  );

  dispatch(addProject(res.data));
} catch (error) {
    console.error("Error adding project:", error);
    alert("Failed to add project. Please try again.");
    return;
}



    console.log("Project Data:", form);
    alert("Project added successfully!");
    setForm({ title: "", description: "", tech: "", github: "", live: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">
            Add New Project
          </h2>
          <button className="p-2 hover:bg-white/10 rounded-lg"  >
            <FiX size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="text-sm text-slate-300">Project Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className="w-full mt-1 p-3 bg-slate-900 border border-white/10 rounded-xl focus:border-cyan-400 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-slate-300">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your project"
              rows="4"
              className="w-full mt-1 p-3 bg-slate-900 border border-white/10 rounded-xl focus:border-cyan-400 outline-none"
              required
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="text-sm text-slate-300">Tech Stack</label>
            <input
              type="text"
              name="tech"
              value={form.tech}
              onChange={handleChange}
              placeholder="React, Node, MongoDB..."
              className="w-full mt-1 p-3 bg-slate-900 border border-white/10 rounded-xl focus:border-cyan-400 outline-none"
            />
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="text-sm text-slate-300">GitHub</label>
              <div className="flex items-center gap-2 mt-1 bg-slate-900 border border-white/10 rounded-xl p-3">
                <FiGithub />
                <input
                  type="url"
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="GitHub link"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-sm text-slate-300">Live Demo</label>
              <div className="flex items-center gap-2 mt-1 bg-slate-900 border border-white/10 rounded-xl p-3">
                <FiLink />
                <input
                  type="url"
                  name="live"
                  value={form.live}
                  onChange={handleChange}
                  placeholder="Live project link"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Upload Button (UI only) */}
          <div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:border-cyan-400 transition">
            <FiUpload className="mx-auto text-3xl text-cyan-400" />
            <p className="text-sm text-slate-400 mt-2">
              Drag & drop image or click to upload
            </p>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-semibold text-lg shadow-lg"
          >
            Add Project
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddProjects;
