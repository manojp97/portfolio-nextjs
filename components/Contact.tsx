import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Get In Touch
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Feel free to reach out for internships, freelance work or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-3 text-slate-300">
              <FaEnvelope className="text-cyan-400" />
              <span>
                manojprajapati97563684@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <FaPhone className="text-cyan-400" />
              <span>
                +91 9756368492
              </span>
            </div>

            <div className="flex gap-5 mt-6 text-2xl">

              <a
                href="https://github.com/manojp97"
                target="_blank"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/manoj-prajapati-3a145127b"
                target="_blank"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Form */}
          <form className="space-y-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;