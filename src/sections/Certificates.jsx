// src/sections/Certificates.jsx
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Programming with JavaScript",
    issuer: "Meta (Coursera)",
    year: "2023",
    credential: "SYYH3B9EUTDE",
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta (Coursera)",
    year: "2023",
  },
  {
    title: "Learning Simple Data Structures in JavaScript",
    issuer: "CodeSignal",
    year: "2023",
  },
  {
    title: "Coding Interview Preparation",
    issuer: "Coursera",
    year: "2023",
    credential: "FKSRN5C7MZFT",
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    year: "2023",
    credential: "K433ERUAEKQ6",
    skills: "Git",
  },
  {
    title: "Attract and Engage Customers with Digital Marketing",
    issuer: "Coursera",
    year: "2022",
    skills: "Social Media, Digital Marketing",
  },
  {
    title: "Foundations of Digital Marketing and E-commerce",
    issuer: "Coursera",
    year: "2022",
    credential: "8NUVE9JCRR8K",
    skills: "Digital Marketing",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-24 px-6 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-primary/20 blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-14"
        >
          Certifications
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card flex items-start gap-4 p-6 rounded-2xl shadow-md"
            >
              <FaAward className="w-8 h-8 text-accent-primary shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-text-primary">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {cert.issuer} • {cert.year}
                </p>
                {cert.credential && (
                  <p className="text-xs text-text-secondary">
                    Credential ID: {cert.credential}
                  </p>
                )}
                {cert.skills && (
                  <p className="text-xs text-accent-primary font-medium mt-1">
                    Skills: {cert.skills}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
