// src/components/Projects.jsx
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiVite,
} from "react-icons/si";

export default function Projects() {
  const iconMap = {
    React: <SiReact className="text-cyan-400" size={18} />,
    TypeScript: <SiTypescript className="text-blue-500" size={18} />,
    Tailwind: <SiTailwindcss className="text-sky-400" size={18} />,
    "Next.js": <SiNextdotjs className="text-gray-200" size={18} />,
    "Node.js": <SiNodedotjs className="text-green-500" size={18} />,
    MongoDB: <SiMongodb className="text-green-400" size={18} />,
    "Socket.IO": <SiSocketdotio className="text-gray-300" size={18} />,
    Vite: <SiVite className="text-purple-400" size={18} />,
  };

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with React, TailwindCSS, and Vite to showcase my work, skills, and design philosophy.",
      tech: ["React", "Tailwind", "Vite"],
      demo: "https://your-portfolio-link.com",
      code: "https://github.com/your-username/portfolio",
    },
    {
      title: "E-commerce Store",
      description:
        "A full-stack shopping experience with product listings, cart, and seamless checkout flow. Scalable and optimized for performance.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-username/ecommerce",
    },
    {
      title: "Chat App",
      description:
        "A real-time messaging platform with WebSockets, authentication, and multi-room support. Minimalistic and lightning fast.",
      tech: ["Next.js", "Tailwind", "Socket.IO"],
      demo: "https://your-chat-app.com",
      code: "https://github.com/your-username/chat-app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden section-premium"
      aria-label="Featured Projects"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A curated showcase of projects I’ve designed and developed —
            blending clean UI, solid engineering, and thoughtful user
            experience.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
                className="relative group glass-card border border-border-primary 
                           rounded-2xl shadow-premium hover:shadow-glow 
                           p-6 md:p-8 flex flex-col transition-all duration-300 overflow-visible"
              >
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 
                             bg-gradient-to-r from-indigo-500 to-purple-500 
                             text-white text-xs md:text-sm font-semibold px-5 py-1.5 
                             rounded-full shadow-lg tracking-wide"
                >
                  {project.title}
                </div>
                <div className="mt-8 flex-1">
                  <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-xl 
                                   bg-white/5 border border-border-primary shadow-sm text-white"
                      >
                        {iconMap[t] ?? t}
                        {iconMap[t] ? null : t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 inline-flex items-center justify-center gap-2"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex md:hidden gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {projects.concat(projects).map((project, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[85%] glass-card border border-border-primary 
                           rounded-2xl shadow-premium p-6 flex flex-col overflow-visible"
              >
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 
                             bg-gradient-to-r from-indigo-500 to-purple-500 
                             text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg"
                >
                  {project.title}
                </div>
                <p className="text-text-secondary mt-6 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-xl 
                                 bg-white/5 border border-border-primary text-white"
                    >
                      {iconMap[t] ?? t}
                      {iconMap[t] ? null : t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 flex items-center justify-center gap-2"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
    </section>
  );
}
