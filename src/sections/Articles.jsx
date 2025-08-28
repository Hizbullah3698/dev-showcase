// src/sections/Articles.jsx
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const articles = [
  {
    title: "Why I Love Building with React & TypeScript",
    link: "#",
    date: "Coming Soon",
  },
  {
    title: "Improving Frontend Performance with Lazy Loading",
    link: "#",
    date: "Coming Soon",
  },
  {
    title: "Mastering Tailwind CSS for Production Apps",
    link: "#",
    date: "Coming Soon",
  },
  {
    title: "Next.js Full-Stack Journey: Lessons Learned",
    link: "#",
    date: "Coming Soon",
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="relative py-24 px-6 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"
    >
      {/* Glow effect */}
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
          Articles & Blogs
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <motion.a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card flex items-start gap-4 p-6 rounded-2xl shadow-md transition-all"
            >
              <FaBookOpen className="w-8 h-8 text-accent-primary shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  {article.date === "Coming Soon" ? (
                    <span className="px-2 py-1 text-xs rounded-full bg-accent-primary/20 text-accent-primary font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    article.date
                  )}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
