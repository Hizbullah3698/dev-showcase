// src/sections/Resume.jsx
export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900 dark:text-dark-text">
          Resume
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Want to know more about my experience and skills in detail? Download
          my full resume below.
        </p>
        <a
          href="" // Put your actual resume file inside public/resume.pdf
          download
          className="inline-block bg-primary-600 text-black font-medium px-8 py-3 rounded-lg shadow-md hover:bg-primary-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
