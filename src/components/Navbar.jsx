import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Education" }, // Added from CV suggestions
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass
        ${
          isScrolled
            ? "bg-surface-primary/95 backdrop-blur-lg border-b border-brand-100/50 shadow-premium"
            : "bg-surface-primary/80 backdrop-blur-md border-b border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand - Bold typography, gradient, animation */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-3xl font-heading text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Hizbullah
            </a>
            <span className="ml-3 px-3 py-1 text-xs font-medium bg-gradient-accent text-white rounded-full hidden sm:inline-block animate-pulse-gentle">
              Frontend Developer
            </span>
          </div>

          {/* Desktop Navigation - Subtle animations, playful cursor */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-text-secondary hover:text-brand-600 font-medium transition-colors duration-300 link-animated cursor-pointer animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons & Dark Mode Toggle - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-surface-secondary hover:bg-brand-100 transition-all duration-300 focus-ring"
              aria-label="Toggle dark mode"
            >
              <svg
                className="w-5 h-5 text-text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isDarkMode
                      ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  }
                />
              </svg>
            </button>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
            <a href="/resume.pdf" download className="btn-primary group">
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>

          {/* Mobile menu button - With focus ring */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-border-light hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 focus-ring"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${
                  isMobileMenuOpen ? "top-3 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${
                  isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu - Glassmorphism, animations */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          <div className="glass rounded-2xl p-6 mt-4 border border-border-light/50 shadow-premium animate-fade-in-up">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-text-secondary hover:text-brand-600 hover:bg-surface-secondary/50 rounded-xl font-medium transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Dark Mode Toggle */}
            <div className="mt-6 pt-6 border-t border-border-light/50">
              <button
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center px-6 py-3 text-sm font-medium text-text-secondary bg-surface-secondary rounded-xl hover:bg-brand-100 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isDarkMode
                        ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    }
                  />
                </svg>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#contact"
                className="btn-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-primary group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar - Enhanced with social links from CV, shows on scroll */}
      <div
        className={`
          bg-gradient-primary text-white text-sm py-2 transition-all duration-500 overflow-hidden
          ${isScrolled ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 text-center flex-wrap">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:hizbullah3698@gmail.com"
                className="hover:underline"
              >
                hizbullah3698@gmail.com
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+923000943975" className="hover:underline">
                +92 300 0943975
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Islamabad, Pakistan</span>
            </div>
            {/* Added GitHub and LinkedIn from CV */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Hizbullah3698"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/hizbullahwazir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
