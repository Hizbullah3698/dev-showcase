import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Articles from "./sections/Articles";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans section-gradient min-h-screen text-text-primary">
      {/* Navbar always on top */}
      <Navbar />

      {/* Smooth page entry animation */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Hero gets more breathing room */}
        <section id="hero" className="snap-start pt-28 pb-20">
          <Hero />
        </section>

        <section id="projects" className="snap-start py-20">
          <Projects />
        </section>

        <section id="experience" className="snap-start py-20">
          <Experience />
        </section>

        <section id="about" className="snap-start py-20">
          <About />
        </section>

        <section id="skills" className="snap-start py-20">
          <Skills />
        </section>

        <section id="certificates" className="snap-start py-20">
          <Certificates />
        </section>

        <section id="articles" className="snap-start py-20">
          <Articles />
        </section>

        <section id="resume" className="snap-start py-20">
          <Resume />
        </section>

        <section id="contact" className="snap-start py-20">
          <Contact />
        </section>
      </motion.main>

      {/* Footer - no extra margin above */}
      <Footer />
    </div>
  );
}

export default App;
