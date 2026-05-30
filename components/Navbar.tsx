"use client";

import { useState, useEffect } from "react";

const links = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 200;
          if (scrollPos >= offset) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-cyan-400 font-bold text-xl">
          Manoj
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-slate-300">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`capitalize transition hover:text-cyan-400 ${
                active === link ? "text-cyan-400 border-b-2 border-cyan-400" : ""
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-cyan-400"
        >
          ☰
        </button>

      </div>

      {/* DROPDOWN MENU (NO OVERLAY, SIMPLE STYLE) */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-3">

          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`block w-full text-left capitalize py-2 text-slate-300 hover:text-cyan-400 ${
                active === link ? "text-cyan-400 font-semibold" : ""
              }`}
            >
              {link}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
}