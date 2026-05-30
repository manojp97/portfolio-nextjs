"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AI Quiz Generator",
    description:
      "AI-powered quiz application using Groq API (LLaMA 3) with authentication, timer, scoring and analytics.",
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "JWT", "Groq API"],
    github: "https://github.com/manojp97/ai-quiz-generator",
  },
  {
    title: "Blog API Backend",
    description:
      "RESTful API with JWT authentication, bcrypt security, CRUD blogs & comments using MVC architecture.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    github: "https://github.com/manojp97/blog-api",
  },
  {
    title: "Number Plate Recognition System",
    description:
      "AI-based system using OpenCV & EasyOCR to detect and extract vehicle number plates from images.",
    tech: ["Python", "OpenCV", "EasyOCR", "NumPy"],
    github: "https://github.com/manojp97/NPRS_System",
    demo: "https://frontend-nprs.onrender.com",
  },
  {
    title: "Expense Tracker",
    description:
      "Full-featured expense tracker with LocalStorage, charts, categories & responsive UI.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/manojp97/Expense_Tracker",
    demo: " https://manojp97.github.io/Expense_Tracker/ ",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-cyan-400 mb-4"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mb-12"
        >
          Projects showcasing Full Stack, Backend & AI skills
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="
                bg-slate-800
                rounded-2xl
                p-6
                border border-slate-700
                hover:border-cyan-400
                transition
                shadow-lg
              "
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="
                      px-3 py-1 rounded-lg
                      bg-slate-700
                      text-cyan-300
                      text-sm
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      px-4 py-2 rounded-lg
                      bg-cyan-500
                      text-black font-semibold
                      hover:bg-cyan-400
                      transition
                    "
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="
                      px-4 py-2 rounded-lg
                      border border-cyan-500
                      text-cyan-400
                      hover:bg-cyan-500
                      hover:text-black
                      transition
                    "
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}