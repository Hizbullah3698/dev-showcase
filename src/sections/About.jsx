// src/sections/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Decorative gradient blob (subtle premium effect) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-100 blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I'm a{" "}
          <span className="font-semibold text-gray-900">
            Frontend Developer
          </span>{" "}
          from Islamabad with{" "}
          <span className="font-semibold text-brand-600">
            1+ years of experience
          </span>{" "}
          crafting responsive, user-friendly web applications. My expertise lies
          in{" "}
          <span className="font-semibold text-gray-900">
            React.js, TypeScript, and Tailwind CSS
          </span>
          , where I focus on building pixel-perfect and performant UIs.
        </p>

        {/* Impact Paragraph */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          I’ve contributed to{" "}
          <span className="font-semibold text-gray-900">
            website migrations, performance optimization, and UX improvements
          </span>
          , always aiming for a balance between elegant design and scalable
          code. Currently, I’m expanding into{" "}
          <span className="font-semibold text-brand-600">Next.js</span> and
          full-stack development to deliver modern end-to-end solutions.
        </p>

        {/* Highlight Card */}
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 mb-10">
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-semibold text-brand-600">My goal</span> is to
            transform ideas into digital products that are{" "}
            <span className="italic">intuitive, scalable,</span> and{" "}
            <span className="italic">impactful</span>.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-block bg-brand-600 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-brand-700 transition font-medium"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
