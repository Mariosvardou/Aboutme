import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <motion.div
          className="md:text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600">
            Hi! I'm <strong className="text-black">Marios Vardouniotis</strong>, a 24-year-old pre-graduate in Electronic Engineering.
            I'm passionate about technology, software development, and creating responsive, modern websites and applications.
          </p>
        </motion.div>
    
      </div>
    </section>
  );
}


