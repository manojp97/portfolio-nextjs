"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 px-6 pt-24 md:pt-28"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-cyan-400">Manoj</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-5 text-slate-300">
            I'm a{" "}
            <span className="text-cyan-400 font-semibold">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Developer",
                  "MERN Stack Developer",
                  "AI Enthusiast",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl leading-7">
            I build scalable web apps, REST APIs, and AI-powered solutions using
            React, Next.js, Node.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              Projects
            </a>

          </div>

          {/* Social */}
          <div className="flex gap-5 mt-6 text-2xl justify-center md:justify-start">

            <a
              href="https://github.com/manojp97"
              target="_blank"
              className="text-slate-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/manoj-prajapati-3a145127b"
              target="_blank"
              className="text-slate-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* glow */}
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <Image
              src="/manoj.png"
              alt="Manoj"
              width={380}
              height={380}
              priority
              className="relative rounded-full border-4 border-cyan-500 object-cover w-[300px] h-[300px] md:w-[380px] md:h-[380px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}