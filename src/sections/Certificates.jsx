import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Programming with JavaScript",
    issuer: "Meta (Coursera)",
    year: "2023",
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta (Coursera)",
    year: "2023",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 shadow-card rounded-2xl p-6 flex items-start gap-4"
          >
            <FaAward className="w-8 h-8 text-brand-600 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
