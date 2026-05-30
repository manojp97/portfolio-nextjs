"use client";

import { motion } from "framer-motion";

const skillGroups = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],

  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"],

  Database: ["MongoDB", "MySQL"],

  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          Skills & Technologies
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skillGroups).map(([title, skills], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                bg-slate-900
                p-6
                rounded-2xl
                border border-slate-800
                hover:border-cyan-500
                shadow-lg
                transition
              "
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-5 text-cyan-400">
                {title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="
                      bg-slate-800
                      text-slate-200
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      hover:bg-cyan-500
                      hover:text-black
                      transition
                      cursor-default
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}