import { useState } from "react";
import { motion } from "motion/react";
import { FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  const [messages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      message: "Hi, I am interested in your services.",
      time: "5 min ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      message: "Can we collaborate on a project?",
      time: "20 min ago",
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@gmail.com",
      message: "I want a website for my business.",
      time: "1 hr ago",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-300 hover:text-white"
        >
          <FiArrowLeft /> Back
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          Messages
        </h1>

        <div></div>
      </div>

      {/* Messages List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                <FiUser />
              </div>
              <div>
                <h2 className="font-semibold text-cyan-300">{msg.name}</h2>
                <p className="text-xs text-slate-400">{msg.email}</p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-slate-900/50 p-3 rounded-xl">
              <p className="text-sm text-slate-300">{msg.message}</p>
            </div>

            {/* Time */}
            <p className="text-xs text-slate-500 mt-3">{msg.time}</p>

            {/* Action */}
            <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition">
              <FiMail /> Reply
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
