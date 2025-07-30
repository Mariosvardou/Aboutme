import { useState } from "react";
import { motion } from "framer-motion";


export default function Projects() {
  const allProjects = [
    {
      title: "Portfolio Website",
      category: "Frontend",
      image: "/images/portfolio.png",
      description: "A modern and responsive personal portfolio built with React and Tailwind CSS.",
      github: "https://github.com/marios/portfolio",
      demo: "https://marios-portfolio.vercel.app",
    },
    {
      title: "Task Manager App",
      category: "Full Stack",
      image: "/images/tasks.png",
      description: "Full stack task management app using React, Node.js, and MongoDB.",
      github: "https://github.com/marios/task-manager",
      demo: "https://tasks.marios.com",
    },
    {
      title: "Weather Widget",
      category: "Frontend",
      image: "/images/weather.png",
      description: "Weather app with real-time API data and animated UI.",
      github: "#",
      demo: "#",
    },
  ];

  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-blue-500 text-white"
                  : "border-gray-300 text-gray-600 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div  key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

