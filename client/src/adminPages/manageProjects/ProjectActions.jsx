import { useState } from "react";
import { motion } from "motion/react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
//import AddProjects from "./AddProjects";

const ProjectAction = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
   // console.log("Toggle State:", toggle); // Debugging log
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", desc: "My personal portfolio project" },
    { id: 2, title: "E-commerce App", desc: "Full stack shopping app" },
    { id: 3, title: "Chat Application", desc: "Realtime chat app using socket" },
  ]);

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleUpdate = (id) => {
    const newTitle = prompt("Enter new project title:");
    if (!newTitle) return;

    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, title: newTitle } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8">Project Management</h1>

       <div className="grid md:grid-cols-3 gap-6">
        {/* Create */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setToggle(true)}
          className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center gap-3 font-semibold"
        >
          <FiPlus /> Create New Project
        </motion.button>
</div>

{toggle && navigate("/add-project")}

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-lg"
          >
            <h2 className="text-xl font-bold text-cyan-300">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              {project.desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => handleUpdate(project.id)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 transition"
              >
                <FiEdit /> Update
              </button>

              <button
                onClick={() => handleDelete(project.id)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
              >
                <FiTrash2 /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAction;
