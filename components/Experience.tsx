export default function Experience() {
  const experiences = [
    {
      company: "EduSkills",
      role: "Full Stack Developer Intern",
      duration: "Jan 2026 - Mar 2026",
      points: [
        "Completed 10-week MERN Stack Internship",
        "Worked on Frontend-Backend Integration",
        "Developed REST APIs",
        "Strengthened React, Node.js, Express.js and MongoDB skills",
      ],
    },
    {
      company: "EduSkills Foundation + AICTE",
      role: "Employability Skills Intern",
      duration: "Oct 2025 - Dec 2025",
      points: [
        "Professional Communication",
        "Problem Solving",
        "Workplace Readiness",
        "AICTE Certified Internship",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-slate-800 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold">
                {exp.role}
              </h3>

              <p className="text-cyan-400 mt-1">
                {exp.company}
              </p>

              <p className="text-slate-400 mb-4">
                {exp.duration}
              </p>

              <ul className="space-y-2 text-slate-300">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}