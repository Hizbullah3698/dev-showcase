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
    <div className="font-sans section-gradient min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Certificates />
        <Articles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
