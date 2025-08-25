export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/assets/profile.jpg"
            alt="Hizbullah"
            className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-gray-200"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            I'm a Frontend Developer from Islamabad with 1+ years of experience
            building responsive, user-friendly web applications. I specialize in{" "}
            <span className="font-semibold">
              React.js, TypeScript, and Tailwind CSS
            </span>
            .
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I’ve worked on real-world projects like{" "}
            <span className="font-semibold">
              website migrations, performance optimization, and UI/UX
              improvements
            </span>
            . Right now, I’m expanding into Next.js and full-stack development.
          </p>
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
