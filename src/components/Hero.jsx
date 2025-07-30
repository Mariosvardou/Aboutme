import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden"
    >
      {/* Background animated blob */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 3 }}
      ></motion.div>

      <div className="z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-500">Marios</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Future Full Stack Developer | Electronics Engineer in progress
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-xl text-lg hover:bg-blue-600 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          View Projects
        </motion.a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-blue-500 text-2xl">
          <a href="https://github.com/mariosvardou" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/marios" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:mariosvardou123@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="mt-10 text-blue-500 text-3xl animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          ⬇️
        </motion.div>
      </div>
    </section>
  );
}


