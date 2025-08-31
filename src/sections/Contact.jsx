// src/sections/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaAt,
  FaRegCommentDots,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // ✅ from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ from .env
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ from .env
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mt-4"
        >
          Have a project idea or just want to say hi? Drop me a message below 🚀
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6"
      >
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="pl-12 pr-4 py-3 w-full rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            />
          </div>
          <div className="relative">
            <FaAt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="pl-12 pr-4 py-3 w-full rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <FaRegCommentDots className="absolute left-4 top-5 text-gray-400" />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="pl-12 pr-4 py-3 w-full rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition"
        >
          <FaPaperPlane className="w-5 h-5" />
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mt-12 text-gray-300"
      >
        <a
          href="mailto:hizbullah3698@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope size={26} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub size={26} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin size={26} />
        </a>
      </motion.div>
    </section>
  );
}
