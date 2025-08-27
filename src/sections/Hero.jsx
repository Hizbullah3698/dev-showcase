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
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects - more subtle and better control
  const y1 = useTransform(scrollY, [0, 400], [0, -50]);
  const y2 = useTransform(scrollY, [0, 400], [0, -30]);
  const opacity = useTransform(scrollY, [0, 200], [1, 1]); // Keep content visible longer
  const contentOpacity = useTransform(scrollY, [200, 400], [1, 0]); // Separate control for content fade

  // Mouse tracking for gradient effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing animation text
  const skills = [
    "React Developer",
    "TypeScript Expert",
    "UI/UX Engineer",
    "Performance Optimizer",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />

        {/* Interactive gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Static background orbs */}
        <motion.div
          className="absolute top-20 -right-32 w-80 h-80 rounded-full bg-gradient-primary opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-accent opacity-15 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
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
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-text-secondary"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Main Heading */}
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
                    transition={{ type: "spring", stiffness: 300 }}
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

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl"
            >
              I craft{" "}
              <span className="text-accent-primary font-semibold">
                premium web experiences
              </span>{" "}
              that combine stunning visuals with blazing-fast performance.
              Specializing in{" "}
              <span className="text-gradient font-semibold">
                React & TypeScript
              </span>{" "}
              to build scalable applications that users love.
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
              ].map((stat, index) => (
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

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  View My Work
                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Download Resume
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              style={{ opacity: contentOpacity }} // Keep social links visible longer
              className="flex items-center gap-4"
            >
              <span className="text-sm text-text-muted">Connect with me:</span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/hizbullah",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/hizbullah",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="glass p-3 rounded-lg text-text-secondary hover:text-accent-primary transition-all duration-300 hover:shadow-glow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Profile Card */}
          <motion.div
            style={{ y: y2 }}
            variants={itemVariants}
            className="relative w-full max-w-md mx-auto lg:max-w-lg"
          >
            {/* Floating Elements */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-6 -right-6 glass p-3 rounded-xl shadow-glow z-10"
            >
              <Code2 size={20} className="text-accent-primary" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-lg shadow-glow z-10"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-text-secondary">
                  Available
                </span>
              </div>
            </motion.div>

            {/* Main Profile Card */}
            <motion.div
              className="glass-card rounded-2xl p-6 text-center relative group overflow-hidden"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Spotlight Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Profile Image Container */}
              <div className="relative mx-auto mb-4">
                {/* Static Professional Border */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-primary opacity-60 blur-sm" />

                {/* Profile Image */}
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border border-accent-primary/30">
                  <motion.img
                    src="/Profile.png"
                    alt="Hizbullah - Frontend Developer"
                    className="w-full h-full object-cover"
                    loading="eager"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
                </div>

                {/* Status Badge */}
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-gradient-success text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Open to Work
                </motion.div>
              </div>

              {/* Info */}
              <motion.h2
                className="text-2xl font-bold text-gradient mb-1"
                whileHover={{ scale: 1.02 }}
              >
                Hizbullah
              </motion.h2>

              <p className="text-base text-text-secondary mb-4">
                Senior Frontend Developer
              </p>

              {/* Quick Stats */}
              <div className="flex justify-center gap-4 mb-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-accent-primary text-xs">
                    React
                  </div>
                  <div className="text-text-muted text-xs">Expert</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-accent-secondary text-xs">
                    TypeScript
                  </div>
                  <div className="text-text-muted text-xs">Advanced</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-accent-pink text-xs">
                    UI/UX
                  </div>
                  <div className="text-text-muted text-xs">Skilled</div>
                </div>
              </div>

              {/* CTA Button - Fixed styling */}
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-primary text-white font-semibold py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300 group border-0"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Work Together
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight size={16} />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ opacity: contentOpacity }} // Keep scroll indicator visible with content
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-text-muted hover:text-accent-primary transition-colors duration-300 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs mb-2 opacity-80">Scroll to explore</span>
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
