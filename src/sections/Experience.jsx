// src/sections/Experience.jsx
import { motion } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiCheckCircle,
} from "react-icons/hi";

export default function Experience() {
  const experiences = [
    {
      role: "React.js Developer",
      company: "Aiztek Technology",
      period: "Jan 2024 — Jan 2025",
      location: "Remote",
      highlights: [
        "Redesigned and migrated WithGrace to React.js with code-splitting & lazy loading.",
        "Built drag-and-drop flows using react-beautiful-dnd, cutting management time by ~60%.",
        "Worked cross-functionally to ship scalable, maintainable features on time.",
      ],
      tech: ["React", "React Router", "Lazy Loading", "react-beautiful-dnd"],
    },
    {
      role: "Frontend Developer",
      company: "NUML ITCON",
      period: "May 2023 — Aug 2023",
      location: "Islamabad",
      highlights: [
        "Developed responsive interfaces with React.js, ES6+, HTML5, CSS3.",
        "Refactored legacy codebases; improved maintainability by ~50%.",
        "Optimized components via memoization and conditional rendering.",
      ],
      tech: ["React", "ES6+", "HTML5", "CSS3"],
    },
    {
      role: "Freelance Frontend Developer",
      company: "Fiverr",
      period: "2023 — Present",
      location: "Remote",
      highlights: [
        "Delivered landing pages, dashboards, and UI kits for clients.",
        "Set up ESLint/Prettier, Git workflows; wrote reusable components.",
        "Used Ant Design & Tailwind for fast delivery and clean UX.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Tailwind",
        "Ant Design",
        "ESLint",
        "Prettier",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <ol className="relative border-s-2 border-purple-500/30">
          {experiences.map((exp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="ms-8 mb-14 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-slate-900 shadow-lg shadow-purple-500/40" />

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/30">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {exp.role}
                  </h3>
                  <span className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-lg text-gray-300">
                    <HiOutlineOfficeBuilding className="mr-1" />
                    {exp.company}
                  </span>
                  <span className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-lg text-gray-300">
                    <HiOutlineCalendar className="mr-1" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-gray-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <HiCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-200 hover:from-purple-500/30 hover:to-blue-500/30 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Resume Button */}
        <div className="mt-16 text-center">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
