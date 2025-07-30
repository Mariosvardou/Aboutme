import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-black text-3xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <span className="mt-2 text-gray-700 dark:text-gray-200 text-sm font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

