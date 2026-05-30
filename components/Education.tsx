export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Education
        </h2>

        {/* Timeline Card */}
        <div className="relative border-l-2 border-cyan-500 pl-8 space-y-12">

          {/* B.Tech */}
          <div className="relative">
            <span className="absolute -left-[42px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></span>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-2xl font-bold text-white">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-cyan-400 mt-1">
                Computer Science & Engineering
              </p>

              <p className="text-slate-300 mt-2">
                Invertis University, Bareilly
              </p>

              <p className="text-slate-400 mt-1">
                2023 - 2027
              </p>

              <div className="mt-4 inline-block bg-cyan-500 text-black font-semibold px-4 py-2 rounded-lg">
                CGPA: 8.7
              </div>
            </div>
          </div>

          {/* Class XII */}
          <div className="relative">
            <span className="absolute -left-[42px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></span>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-2xl font-bold text-white">
                Class XII (UP Board)
              </h3>

              <p className="text-slate-300 mt-2">
                2023
              </p>

              <div className="mt-4 inline-block bg-slate-800 text-cyan-300 px-4 py-2 rounded-lg">
                Percentage: 70.2%
              </div>
            </div>
          </div>

          {/* Class X */}
          <div className="relative">
            <span className="absolute -left-[42px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></span>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-2xl font-bold text-white">
                Class X (UP Board)
              </h3>

              <p className="text-slate-300 mt-2">
                2021
              </p>

              <div className="mt-4 inline-block bg-slate-800 text-cyan-300 px-4 py-2 rounded-lg">
                Percentage: 83.33%
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}