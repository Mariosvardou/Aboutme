// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm">© 2025 Marios Vardouniotis. All rights reserved.</p>
        </motion.div>

        <motion.div 
          className="flex space-x-6 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-cyan-400 transition">
            <FaEnvelope size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

