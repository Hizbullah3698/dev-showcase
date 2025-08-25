// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, TailwindCSS, and Vite to showcase my work and skills.",
      tech: ["React", "Tailwind", "Vite"],
      demo: "https://your-portfolio-link.com",
      code: "https://github.com/your-username/portfolio",
    },
    {
      title: "E-commerce Store",
      description:
        "Full-stack store with product listings, cart functionality, and checkout flow.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-username/ecommerce",
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application using WebSockets with authentication and chat rooms.",
      tech: ["Next.js", "Tailwind", "Socket.IO"],
      demo: "https://your-chat-app.com",
      code: "https://github.com/your-username/chat-app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 section-premium relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my most recent work. Explore the demos and dive into
            the code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/20 
                         rounded-3xl shadow-premium hover:shadow-glow p-8 flex flex-col 
                         transition-all duration-300"
            >
              {/* Ribbon */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 
                              bg-gradient-to-r from-brand-500 to-accent-500 
                              text-white text-xs font-medium px-4 py-1 rounded-full 
                              shadow-md"
              >
                {project.title}
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-text-secondary mb-5 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-sm font-medium rounded-full 
                                 bg-gradient-to-r from-brand-500/80 to-accent-500/80 
                                 text-white shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center rounded-xl"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 text-center rounded-xl"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-brand-500/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent-500/30 blur-[140px] rounded-full" />
    </section>
  );
}
