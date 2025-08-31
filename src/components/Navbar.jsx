import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Articles", href: "#articles" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Improved active section detection with offset
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let current = "hero";
      const offset = 200; // Adjust this value based on your navbar height

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + currentScrollY;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (
            currentScrollY >= sectionTop - offset &&
            currentScrollY < sectionBottom - offset
          ) {
            current = navLinks[index].href.replace("#", "");
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass backdrop-blur-xl bg-bg-secondary/80 shadow-glow border-b border-border-primary"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="text-xl lg:text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hizbullah.dev
            </motion.a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className={`relative px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 block
                        ${
                          isActive
                            ? "text-accent-primary bg-accent-primary/10 shadow-glow"
                            : "text-text-secondary hover:text-accent-primary hover:bg-bg-card"
                        }`}
                      whileHover={{ y: -1 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-primary rounded-full"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </motion.a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button - Desktop only */}
            <motion.a
              href="#contact"
              className="hidden lg:block btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Get In Touch
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden glass p-2 rounded-lg text-text-primary hover:text-accent-primary transition-colors duration-300"
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bg-primary/90 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-[80px] left-4 right-4 z-50 lg:hidden"
            >
              <div className="glass-card rounded-2xl p-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive =
                      activeSection === link.href.replace("#", "");
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={link.href}
                          onClick={handleLinkClick}
                          className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                            isActive
                              ? "text-accent-primary bg-accent-primary/10 shadow-glow"
                              : "text-text-secondary hover:text-accent-primary hover:bg-bg-card"
                          }`}
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 pt-6 border-t border-border-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                >
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="btn-primary w-full text-center block"
                  >
                    Get In Touch
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
