import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Manoj Prajapati
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Full Stack Developer & AI Enthusiast passionate
              about building scalable web applications,
              REST APIs and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-cyan-400 transition"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>
                  manojprajapati97563684@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                <span>
                  +91 9756368492
                </span>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6">

              <a
                href="https://github.com/manojp97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/manoj-prajapati-3a145127b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:manojprajapati97563684@gmail.com"
                className="text-2xl text-slate-400 hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Manoj Prajapati.
            All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm flex items-center gap-2 mt-3 md:mt-0">
            Built with
            <FaCode className="text-cyan-400" />
            Next.js + TypeScript + Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}