// src/sections/Experience.jsx
import { HiOutlineCalendar, HiOutlineOfficeBuilding } from "react-icons/hi";

export default function Experience() {
  const experiences = [
    {
      role: "React.js Developer",
      company: "Aiztek Technology",
      period: "Jan 2024 — Jan 2025",
      location: "Remote",
      highlights: [
        "Redesigned and migrated WithGrace to React.js with code-splitting & lazy loading for smoother UX.",
        "Built drag-and-drop flows using react-beautiful-dnd, cutting content management time by ~60%.",
        "Worked with cross-functional teams to ship scalable, maintainable features on time.",
      ],
      tech: ["React", "React Router", "Lazy Loading", "react-beautiful-dnd"],
    },
    {
      role: "Frontend Developer",
      company: "NUML ITCON",
      period: "May 2023 — Aug 2023",
      location: "Islamabad",
      highlights: [
        "Developed responsive interfaces with React.js, JavaScript (ES6+), HTML5, CSS3.",
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Work history and real impact. Short, honest highlights — no fluff.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative border-s-2 border-brand-600/40">
          {experiences.map((exp, idx) => (
            <li key={idx} className="ms-6 mb-10">
              {/* dot */}
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 ring-white">
                <span className="h-3 w-3 rounded-full bg-brand-600" />
              </span>

              {/* header */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <HiOutlineOfficeBuilding className="me-1" />
                  {exp.company}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <HiOutlineCalendar className="me-1" />
                  {exp.period}
                </div>
                {exp.location && (
                  <span className="text-sm text-gray-500">{exp.location}</span>
                )}
              </div>

              {/* highlights */}
              <ul className="mt-3 list-disc ps-5 text-gray-700 space-y-1">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              {/* tech */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        {/* Resume button */}
        <div className="mt-12 text-center">
          <a
            href="/resume.pdf" // public/resume.pdf rakho (short, clean filename)
            download
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
