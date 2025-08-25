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
];

export default function Articles() {
  return (
    <section id="articles" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Articles & Blogs
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800 shadow-card rounded-2xl p-6 flex items-start gap-4 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaBookOpen className="w-8 h-8 text-accent-600 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {article.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
