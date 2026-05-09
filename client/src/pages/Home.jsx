import { motion } from "motion/react";


import Navbar from "../components/Navbar";

import HeroSection from "../components/HeroSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
 return (
    <>
      {/* Navbar */}
      <Navbar />

        {/* Hero Section */}
        <HeroSection/>

        <About/>

        <Skills/>
        <Projects/>
        <Contact/>
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Your Name. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none"
      >
        <p className="text-xs text-slate-400 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Home;