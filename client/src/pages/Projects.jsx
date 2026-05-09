import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Navbar from "../components/Navbar";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.vercel.app",
      image: "https://via.placeholder.com/400x250/1e293b/06b6d4?text=E-Commerce",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-taskmanager-demo.vercel.app",
      image: "https://via.placeholder.com/400x250/1e293b/8b5cf6?text=Task+Manager",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with data visualization and automated reporting.",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://your-dashboard-demo.vercel.app",
      image: "https://via.placeholder.com/400x250/1e293b/ec4899?text=Dashboard",
      featured: false,
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "OpenWeather API", "Leaflet", "CSS3"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-demo.vercel.app",
      image: "https://via.placeholder.com/400x250/1e293b/10b981?text=Weather+App",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and dark theme.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.vercel.app",
      image: "https://via.placeholder.com/400x250/1e293b/f59e0b?text=Portfolio",
      featured: false,
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://your-chat-demo.vercel.app",
      image: "https://via.placeholder.com/400x250/1e293b/ef4444?text=Chat+App",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -left-1/2 -top-1/2 w-full h-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 1 }}
          className="absolute -right-1/2 top-1/2 w-full h-full bg-gradient-to-l from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <Navbar />

      <section className="pt-20 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-6">
                My Projects
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for development.
                Each project represents a unique challenge and learning experience.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-cyan-400 text-center">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>

                    {/* Image */}
                    <div className="overflow-hidden h-48 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-slate-300">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full border border-cyan-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 rounded-lg bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                          <FiGithub size={20} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 rounded-lg bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30 transition-colors flex-1 flex items-center justify-center gap-2"
                        >
                          Live Demo <FiExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-violet-400 text-center">Other Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="overflow-hidden h-40 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-xs text-slate-300 line-clamp-2">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-violet-400/10 text-violet-300 rounded-full border border-violet-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs px-2 py-1 text-slate-400">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 pt-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                          <FiGithub size={16} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-1.5 rounded-lg bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30 transition-colors flex-1 flex items-center justify-center gap-1 text-xs"
                        >
                          Live <FiExternalLink size={12} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;