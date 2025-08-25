export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600">
          Have a project idea or just want to say hi? Drop me a message below.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
