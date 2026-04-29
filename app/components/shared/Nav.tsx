"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#hero-section" className="font-bold uppercase text-white">
          Ziad Tamer
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero-section" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#about-section" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills-section" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#certificates-section" className="hover:text-cyan-400">
            Certificates
          </a>
          <a href="#contact-section" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <a href="#hero-section" className="block">
            Home
          </a>
          <a href="#about-section" className="block">
            About
          </a>
          <a href="#skills-section" className="block">
            Skills
          </a>
          <a href="#certificates-section" className="block">
            Certificates
          </a>
          <a href="#contact-section" className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
