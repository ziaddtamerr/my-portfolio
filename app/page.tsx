"use client";

import Image from "next/image";
import aboutImg from "@/public/assets/WhatsApp Image 2025-10-27 at 17.26.38_571d0256.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#about-section",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about-section",
          start: "top 50%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  }, []);

  // Soft skills animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".soft-skills-items",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#soft-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  // Technical skills animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".technical-skills-items",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#technical-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white pt-10 md:pt-15">
      {/* HERO */}
      <section
        id="hero-section"
        className="min-h-screen flex items-center justify-center text-center px-4"
      >
        <div id="hero-text" className="max-w-3xl w-full mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-cyan-400">Ziad Tamer</span>
          </h1>

          <p className="text-cyan-400 font-semibold text-lg md:text-xl mt-4">
            Process Safety Engineer
          </p>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Passionate about process safety, innovation, and sustainable
            technology.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="#about-section"
              className="border border-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition font-medium"
            >
              About
            </a>
            <a
              href="https://www.linkedin.com/in/ziad-tamer-ayesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 bg-gray-900/60 px-6 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-2 font-medium"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about-section" className="py-20 px-4 text-center">
        <h2 className="text-cyan-400 text-3xl font-bold mb-10">About Me</h2>

        <div
          className="max-w-5xl mx-auto shadow-2xl shadow-cyan-800/50 
          rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10
          border border-gray-800/80 bg-linear-to-b from-gray-900/60 to-black
          hover:scale-[1.01] hover:shadow-cyan-600/50 duration-500 
          transition-all"
        >
          <div className="md:w-1/3 w-full flex-shrink-0">
            <Image
              src={aboutImg}
              alt="Ziad Tamer"
              className="rounded-2xl shadow-lg mx-auto h-[420px] w-full object-cover object-center border border-gray-800"
            />
          </div>

          <div className="text-center md:text-left md:w-2/3 w-full space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">Ziad Tamer</h3>
              <p className="text-sm font-semibold text-gray-400 mt-1">
                Process Safety Engineer
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              I am a dedicated <span className="text-cyan-400 font-semibold">Process Safety Engineer</span> passionate about safeguarding industrial operations, hazard mitigation, and process safety research in high-hazard environments.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Holding a <span className="text-cyan-400 font-medium">Process Safety Management (PSM) Foundation</span> credential with Distinction (Enppi / IChemE accredited) and having actively participated in <span className="text-cyan-400 font-medium">EGYPES – Egypt Energy Show</span> (2024, 2025 & 2026), I specialize in robust industrial safety standards, risk governance, and process hazard analysis.
            </p>

            {/* Core Competencies */}
            <div className="text-left space-y-2 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Skills & Competencies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hazard Identification (HAZOP / HAZID)",
                  "Risk Assessment & Mitigation",
                  "Root Cause Analysis (RCA)",
                  "PSM Research & Technical Analysis",
                  "Safety Compliance & Standards",
                  "Process Safety Culture & Barriers",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-cyan-950/40 border border-cyan-800/60 text-cyan-200 text-xs rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills-section" className="py-24 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-400">Skills</h2>
            <p className="text-gray-500 mt-3">
              Technologies and abilities I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div
              id="technical-section"
              className="rounded-2xl border border-gray-800 bg-linear-to-b from-gray-900 to-black p-8 hover:border-cyan-500 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">
                Process Safety Engineering
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Process Safety Management (PSM)",
                  "PSM Research & Analysis",
                  "Hazard Identification (HAZOP / HAZID)",
                  "Risk Assessment & Mitigation",
                  "Incident Investigation (RCA)",
                  "Process Safety Compliance",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="technical-skills-items px-4 py-2 rounded-full text-sm border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              id="soft-section"
              className="rounded-2xl border border-gray-800 bg-linear-to-b from-gray-900 to-black p-8 hover:border-cyan-500 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">
                Soft Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Teamwork",
                  "Leadership",
                  "Problem Solving",
                  "Communication",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="soft-skills-items px-4 py-2 rounded-full text-sm border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-20 px-4 text-center">
        <h2 className="text-cyan-400 text-3xl font-bold mb-10">
          Contact me anytime
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <a
            href="mailto:ziadtamer.ayesh@icloud.com"
            className="w-full p-8 rounded-xl
            shadow-2xl shadow-cyan-800/40 border border-gray-800/60
            hover:scale-[1.02] hover:shadow-cyan-600/50 hover:border-cyan-500/50 duration-500 
            transition-all block"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-cyan-400 text-4xl mb-3"
            />
            <h5 className="font-bold text-lg">Email (iCloud)</h5>
            <p className="text-gray-400 text-sm mt-1">ziadtamer.ayesh@icloud.com</p>
          </a>

          <a
            href="mailto:ziadtamer.ayesh@gmail.com"
            className="w-full p-8 rounded-xl
            shadow-2xl shadow-cyan-800/40 border border-gray-800/60
            hover:scale-[1.02] hover:shadow-cyan-600/50 hover:border-cyan-500/50 duration-500 
            transition-all block"
          >
            <FontAwesomeIcon
              icon={faEnvelopeRegular}
              className="text-cyan-400 text-4xl mb-3"
            />
            <h5 className="font-bold text-lg">Email (Gmail)</h5>
            <p className="text-gray-400 text-sm mt-1">ziadtamer.ayesh@gmail.com</p>
          </a>

          <a
            href="tel:+201015188971"
            className="w-full p-8 rounded-xl
            shadow-2xl shadow-cyan-800/40 border border-gray-800/60
            hover:scale-[1.02] hover:shadow-cyan-600/50 hover:border-cyan-500/50 duration-500 
            transition-all block"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="text-cyan-400 text-4xl mb-3"
            />
            <h5 className="font-bold text-lg">Phone</h5>
            <p className="text-gray-400 text-sm mt-1">+20 101 518 8971</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ziad-tamer-ayesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-8 rounded-xl
            shadow-2xl shadow-cyan-800/40 border border-gray-800/60
            hover:scale-[1.02] hover:shadow-cyan-600/50 hover:border-cyan-500/50 duration-500 
            transition-all block"
          >
            <div className="flex justify-center mb-3">
              <svg
                className="w-9 h-9 fill-cyan-400"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <h5 className="font-bold text-lg">LinkedIn</h5>
            <p className="text-gray-400 text-sm mt-1">in/ziad-tamer-ayesh</p>
          </a>
        </div>
      </section>
    </div>
  );
}
