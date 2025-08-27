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
        {/* Section Heading */}
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

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="relative group bg-white/[0.07] backdrop-blur-xl border border-white/10 
                         rounded-3xl shadow-premium hover:shadow-glow p-8 flex flex-col 
                         transition-all duration-300"
            >
              {/* Ribbon */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 
                           bg-gradient-to-r from-brand-500 to-accent-500 
                           text-white text-xs md:text-sm font-semibold px-5 py-1.5 
                           rounded-full shadow-lg tracking-wide"
              >
                {project.title}
              </div>

              {/* Description */}
              <div className="mt-8 flex-1">
                <p className="text-text-secondary mb-6 leading-relaxed text-base md:text-[15px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-xl 
                                 bg-white/5 border border-white/10 shadow-sm text-white"
                    >
                      {iconMap[t] ?? t}
                      {iconMap[t] ? null : t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 
                             rounded-xl text-sm md:text-base font-medium px-4 py-2
                             bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg
                             hover:opacity-90 transition"
                >
                  <ExternalLink size={16} /> Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 
                             rounded-xl text-sm md:text-base font-medium px-4 py-2
                             border border-white/20 text-white hover:bg-white/10 transition"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow Accents */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-brand-500/25 blur-[140px] rounded-full" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent-500/25 blur-[140px] rounded-full" />
    </section>
  );
}
