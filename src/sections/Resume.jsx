// src/sections/Resume.jsx
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 px-6 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-primary/20 blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary"
        >
          Resume
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary mb-10 leading-relaxed"
        >
          Want to know more about my{" "}
          <span className="font-semibold text-text-primary">experience</span>{" "}
          and <span className="font-semibold text-text-primary">skills</span>?
          Download my full resume below.
        </motion.p>

        {/* Resume Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card max-w-md mx-auto p-6 rounded-2xl shadow-lg mb-10"
        >
          <div className="flex items-center justify-center gap-3 text-accent-primary">
            <FaFileDownload className="text-4xl" />
            <span className="text-lg font-medium">Resume.pdf</span>
          </div>
          <p className="text-sm text-text-secondary mt-3">
            Last updated: Aug 2025
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf" // put resume inside public folder
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium px-8 py-3 rounded-xl shadow-md hover:shadow-xl transition-all"
        >
          <FaFileDownload className="w-5 h-5" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
