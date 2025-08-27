// src/sections/Experience.jsx
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
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <ol className="relative border-s-2 border-gradient-to-b from-brand-500/70 to-brand-700/70">
          {experiences.map((exp, idx) => (
            <li key={idx} className="ms-6 mb-12 relative">
              {/* dot */}
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 ring-4 ring-gray-900 shadow-md shadow-brand-500/30" />

              {/* card */}
              <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-xl p-6 transition hover:border-brand-500/60 hover:shadow-lg hover:shadow-brand-600/30">
                {/* header */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <HiOutlineOfficeBuilding className="me-1" />
                    {exp.company}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <HiOutlineCalendar className="me-1" />
                    {exp.period}
                  </div>
                  {exp.location && (
                    <span className="text-sm text-gray-500">
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* highlights */}
                <ul className="mt-2 space-y-2 text-gray-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <HiCheckCircle className="text-brand-500 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-lg border border-brand-500/40 text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Resume button */}
        <div className="mt-14 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md hover:shadow-lg hover:shadow-brand-600/40 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
