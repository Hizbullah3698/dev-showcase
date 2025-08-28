// src/sections/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-primary/20 blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-6"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-text-secondary mb-14 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          A toolkit of modern technologies I use to craft{" "}
          <span className="font-semibold text-accent-primary">
            fast, scalable, and elegant
          </span>{" "}
          applications.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card flex flex-col items-center justify-center shadow-md rounded-2xl p-6 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-5xl mb-3"
              >
                {skill.icon}
              </motion.div>
              <p className="text-lg font-medium text-text-primary">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
