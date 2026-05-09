import { useState } from "react";

import { motion } from "motion/react";
import {
  
  FiLogOut,
  FiMessageSquare,
  FiFolder,
  FiUser,
  FiBell,
} from "react-icons/fi";
//import ProjectActions from "../adminPages/manageProjects/ProjectActions";
import { useNavigate } from "react-router-dom";
import Message from "../adminPages/Message";


const AdminDashboard = () => {
    const navigate = useNavigate();
  const [messageCount, setMessageCount] = useState(5);
 // const [showMessages, setShowMessages] = useState(false);

 /* const messages = [
    { id: 1, sender: "John Doe", text: "Hi, interested in your services", time: "5m ago" },
    { id: 2, sender: "Jane Smith", text: "Great portfolio! Let's connect", time: "12m ago" },
    { id: 3, sender: "Bob Wilson", text: "Can you work on my project?", time: "1h ago" },
    { id: 4, sender: "Alice Johnson", text: "Love your work style", time: "2h ago" },
    { id: 5, sender: "Charlie Brown", text: "Available for freelance?", time: "3h ago" },
  ];
*/
  const menuItems = [
    {
      icon: FiFolder,
      label: "Manage Projects",
      color: "from-cyan-400 to-blue-500",
      description: "Create, edit & delete projects",
      onclick: () => navigate("/project-actions")
    },
    {
      icon: FiUser,
      label: "Manage Profile",
      color: "from-violet-400 to-purple-500",
      description: "Update your profile info",
      onclick: () => navigate("/profile-actions")
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    // Add logout logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, delay: 5 }}
          className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-40 bg-slate-900/50 backdrop-blur-lg border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="hidden md:block">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-slate-400 text-sm mt-1">Manage your portfolio & projects</p>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button className="p-3 hover:bg-white/10 rounded-lg transition-colors relative">
                  <FiBell size={24} className="text-cyan-400" />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
                  />
                </button>
              </motion.div>

              {/* Messages */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button
                  onClick={() => navigate("/messages")}
                  className="p-3 hover:bg-white/10 rounded-lg transition-colors relative"
                >
                  <FiMessageSquare size={24} className="text-violet-400" />
                  {messageCount > 0 && (
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      {messageCount}
                    </motion.span>
                  )}
                </button>

               
               
              </motion.div>

              {/* Logout Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold transition-all duration-300"
              >
                <FiLogOut size={20} />
                Logout
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Welcome Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Greeting Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Admin! 👋</h2>
              <p className="text-slate-300 text-lg">
                You have <span className="text-cyan-400 font-semibold">{messageCount} new messages</span> and your
                portfolio is looking great.
              </p>
            </motion.div>

            {/* Dashboard Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(6, 182, 212, 0.2)" }}
                      className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl cursor-pointer group`}
                    >
                      <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: [0, 100], transition: { duration: 0.5 } }}
                        />
                        <div className="relative z-10 space-y-4">
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-5xl"
                          >
                            <Icon className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                          </motion.div>
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                          </div>
                          <motion.button
                            whileHover={{ x: 8 }}
                            className="mt-4 inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                            onClick={item.onclick}
                          >
                            Access Now →
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">Portfolio Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Projects", value: "12", change: "+3 this month" },
                  { label: "Profile Views", value: "1.2K", change: "+240 today" },
                  { label: "Total Messages", value: "48", change: "5 unread" },
                  { label: "Profile Visitors", value: "856", change: "+120 week" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/50 transition-colors"
                  >
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-cyan-400 mt-2">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Logout Button */}
            <motion.div variants={itemVariants} className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold transition-all duration-300"
              >
                <FiLogOut size={20} />
                Logout
              </motion.button>
            </motion.div>
          </motion.div>
        </main>

      </div>
      
     
    </div>
  );
};

export default AdminDashboard;
