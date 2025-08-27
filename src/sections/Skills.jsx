// src/sections/Skills.jsx
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-100 blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Skills
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          A toolkit of modern technologies I use to craft{" "}
          <span className="font-semibold text-brand-600">
            fast, scalable, and elegant
          </span>{" "}
          applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-lg font-medium text-gray-800 group-hover:text-brand-600 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
