import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Download,
  ExternalLink,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 400], [0, -50]);
  const y2 = useTransform(scrollY, [0, 400], [0, -30]);
  const contentOpacity = useTransform(scrollY, [200, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "React Developer",
    "TypeScript Expert",
    "UI/UX Engineer",
    "Performance Optimizer",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSkill((prev) => (prev + 1) % skills.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic BG */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div style={{ y: y1 }} className="relative z-10 section-container">
        <motion.div
          style={{ opacity: contentOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto"
        >
          {/* Left */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-text-secondary"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="font-bold leading-tight mb-4">
                <div className="text-[clamp(2.5rem,8vw,5rem)] text-text-primary">
                  Hi, I'm{" "}
                  <motion.span
                    className="text-gradient inline-block"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(102, 126, 234, 0.5)",
                    }}
                  >
                    Hizbullah
                  </motion.span>
                </div>
                <div className="text-[clamp(1.5rem,4vw,2.5rem)] text-text-secondary font-normal mt-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentSkill}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-gradient-accent inline-block"
                    >
                      {skills[currentSkill]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl"
            >
              I craft{" "}
              <span className="text-accent-primary font-semibold">
                premium web experiences
              </span>{" "}
              with stunning visuals & blazing-fast performance. Specializing in{" "}
              <span className="text-gradient font-semibold">
                React & TypeScript
              </span>
              .
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 lg:gap-8"
            >
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "3+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.a
                href="#projects"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
              >
                <Sparkles size={18} /> View My Work
                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="btn-secondary group"
                whileHover={{ scale: 1.02 }}
              >
                <Download size={18} /> Resume
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Big Profile Image */}
          <motion.div
            style={{ y: y2 }}
            variants={itemVariants}
            className="relative w-full flex justify-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Glowing Gradient Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)) border-box",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-accent-primary to-accent-secondary" />
              {/* Image */}
              <motion.img
                src="/Profile.png"
                alt="Hizbullah"
                className="relative w-full h-full object-cover rounded-full border-4 border-bg-primary shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-text-muted hover:text-accent-primary group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <ArrowDown size={20} className="group-hover:translate-y-1" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
