// src/components/Projects.jsx
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work. Each project includes a description,
            tech stack, and links to the live demo and code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-card p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 text-center"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary flex-1 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
