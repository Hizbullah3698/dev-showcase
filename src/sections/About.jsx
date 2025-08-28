// src/sections/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"
    >
      {/* Decorative blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/30 blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-8"
        >
          About Me
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-text-secondary mb-6 leading-relaxed"
        >
          I'm a{" "}
          <span className="font-semibold text-text-primary">
            Frontend Developer
          </span>{" "}
          from Islamabad with{" "}
          <span className="font-semibold text-accent-primary">
            1+ years of experience
          </span>{" "}
          crafting responsive, user-friendly web applications. My expertise lies
          in{" "}
          <span className="font-semibold text-text-primary">
            React.js, TypeScript, and Tailwind CSS
          </span>
          , where I focus on building pixel-perfect and performant UIs.
        </motion.p>

        {/* Impact Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed"
        >
          I’ve contributed to{" "}
          <span className="font-semibold text-text-primary">
            website migrations, performance optimization, and UX improvements
          </span>
          , always aiming for a balance between elegant design and scalable
          code. Currently, I’m expanding into{" "}
          <span className="font-semibold text-accent-primary">Next.js</span> and
          full-stack development to deliver modern end-to-end solutions.
        </motion.p>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card shadow-xl rounded-2xl p-6 mb-12"
        >
          <p className="text-text-primary text-lg leading-relaxed">
            <span className="font-semibold text-accent-primary">My goal</span>{" "}
            is to transform ideas into digital products that are{" "}
            <span className="italic">intuitive, scalable,</span> and{" "}
            <span className="italic">impactful</span>.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary inline-block px-8 py-3 rounded-xl font-medium"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
