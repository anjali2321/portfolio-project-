
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-lg">
        <h1 className="text-xl font-bold">Anjali Portfolio</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Anjali 👋</h2>

        <p className="text-lg text-gray-300 mb-6">
          Full Stack Developer | React | Java | Spring Boot
        </p>

        {/* Resume Buttons */}
        <div className="flex gap-4 mb-6">
          <a
            href="https://drive.google.com/file/d/16QeFcll005XPem3kLOco2qKMPjGtzGMN/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-2 rounded-xl hover:bg-green-600"
          >
            View Resume
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=16QeFcll005XPem3kLOco2qKMPjGtzGMN"
            className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <FaDownload /> Download
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/anjali2321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/anjalichimata520741/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400" />
          </a>
        </div>

        {/* View Work Button */}
        <a
          href="#projects"
          className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-600 mt-6"
        >
          View My Work
        </a>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Java", "Spring Boot"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-xl shadow hover:scale-110 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">E-commerce App</h3>
            <p className="text-gray-400 mt-2">React + Node.js</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">React + Tailwind</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Calculator App</h3>
            <p className="text-gray-400 mt-2">JavaScript</p>
          </div>

        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
  id="contact"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="p-10 text-center"
>
  <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

  <p className="text-gray-300">
    📧 Email:
    <a
      href="mailto:anjalichimata21@gmail.com"
      className="text-blue-400 ml-2"
    >
      anjalichimata21@gmail.com
    </a>
  </p>
</motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4 mt-10">
        <p>© 2026 Anjali. All rights reserved.</p>
      </footer>
    </div>
  );
}