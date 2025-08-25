import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 section-premium bg-hero-pattern"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center py-12">
        {/* Text Section - Enhanced with gradient and animation */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-text-primary mb-4">
            Hi, I’m <span className="text-gradient">Hizbullah</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-6 leading-relaxed max-w-prose">
            Frontend Developer with{" "}
            <span className="font-semibold text-brand-600">1+ years</span> of
            experience in React & TypeScript. I craft clean, responsive web
            applications with a focus on{" "}
            <span className="text-accent-600">performance optimization</span>.
          </p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="btn-primary focus-ring"
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-secondary focus-ring"
              aria-label="Contact me"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Card Section - Glassmorphism and 3D effect */}
        <motion.div
          initial={{ y: 50, opacity: 0, rotate: 5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            transition: { duration: 0.3 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto card-premium p-6 lg:p-8 rounded-3xl shadow-premium transform hover:shadow-glow"
        >
          {/* Ribbon - Animated with gradient */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-glow animate-pulse-gentle">
            Frontend Developer
          </div>

          {/* Profile Image - With subtle hover effect */}
          <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto mt-6 mb-4 relative overflow-hidden rounded-2xl">
            <img
              src="/Profile.png"
              alt="Hizbullah Wazir, React & TypeScript Engineer"
              className="w-full h-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
          </div>

          {/* Info - Bold typography with animation */}
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-2xl lg:text-3xl font-bold text-text-primary mb-1 text-center"
          >
            Hizbullah
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-sm lg:text-base text-text-tertiary mb-6 text-center"
          >
            React & TypeScript Engineer
          </motion.p>

          {/* Card Footer - Interactive button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-auto w-full"
          >
            <a
              href="#contact"
              className="w-full btn-primary text-white rounded-xl shadow-premium hover:shadow-glow flex items-center justify-center gap-2 focus-ring"
              aria-label="Get in touch to work together"
            >
              <span>Let’s Work Together</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
