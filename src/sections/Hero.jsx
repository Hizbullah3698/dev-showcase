import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 section-container section-padding overflow-hidden bg-hero-gradient"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-primary blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-accent blur-3xl opacity-20 animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ===== Text Section ===== */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight mb-6">
            Hi, I’m{" "}
            <span className="text-gradient animate-gradient bg-clip-text">
              Hizbullah
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 max-w-xl leading-relaxed">
            I craft{" "}
            <span className="font-semibold text-gradient-accent">
              high-performance
            </span>{" "}
            and{" "}
            <span className="font-semibold text-accent-primary">
              responsive web applications
            </span>{" "}
            using React & TypeScript — with a focus on{" "}
            <span className="text-accent-cyan font-semibold">
              performance optimization
            </span>
            .
          </p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* ===== Profile Section ===== */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotate: -1,
            transition: { duration: 0.3 },
          }}
          className="relative w-full max-w-sm mx-auto glass-card rounded-3xl p-8 shadow-card text-center"
        >
          {/* Floating Ribbon */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-xs md:text-sm font-medium px-6 py-2 rounded-full shadow-glow animate-float"
          >
            Frontend Developer
          </motion.div>

          {/* Profile Image */}
          <div className="relative mx-auto mb-6 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg ring-4 ring-border-accent">
            <img
              src="/Profile.png"
              alt="Hizbullah - React & TypeScript Engineer"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Info */}
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            Hizbullah
          </h2>
          <p className="text-sm md:text-base text-text-secondary mb-6">
            React & TypeScript Engineer
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            <span>Let’s Work Together</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
      </div>
    </section>
  );
}
