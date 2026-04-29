"use client";

import Image from "next/image";
import heroImg from "@/public/assets/WhatsApp Image 2025-10-27 at 17.26.38_dc176daa.jpg";
import aboutImg from "@/public/assets/WhatsApp Image 2025-10-27 at 17.26.38_571d0256.jpg";

import certificateImg1 from "@/public/certificate/Huawei 2025 intern_page-0001.jpg";
import certificateImg2 from "@/public/certificate/PSM _page-0001.jpg";

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
      "#hero-image",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 },
    );
    gsap.fromTo(
      "#hero-text",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 },
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
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div id="hero-image">
            <Image
              src={heroImg}
              alt="hero"
              className="rounded-3xl shadow-lg mx-auto md:h-[500px] w-[75%] object-cover object-bottom"
            />
          </div>

          <div id="hero-text">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-cyan-400">Ziad Tamer</span>
            </h1>

            <p className="text-gray-400 font-semibold mt-3">
              3rd-Year Electrical Engineering Student
            </p>

            <p className="text-gray-500 mt-2">
              Huawei Certified – Passionate about innovation, electronics, and
              sustainable technology.
            </p>

            <a
              href="#about-section"
              className="inline-block mt-5 border border-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              About
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about-section" className="py-20 px-4 text-center">
        <h2 className="text-cyan-400 text-3xl font-bold mb-10">About Me</h2>

        <div
          className="max-w-5xl mx-auto shadow-2xl shadow-cyan-800/50 
          rounded-3xl p-4 flex flex-col md:flex-row items-center gap-8
          hover:scale-[1.01] hover:shadow-cyan-600/50 duration-500 
          transition-all cursor-pointer"
        >
          <Image
            src={aboutImg}
            alt="Ziad Tamer"
            className="rounded-3xl shadow-lg mx-auto h-[400px] w-full object-cover object-center"
          />

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Ziad Tamer</h3>

            <p className="text-gray-400 leading-relaxed">
              I’m a 3rd-Year Electrical Engineering student at{" "}
              <span className="text-cyan-400">October 6 University</span> —
              <span className="text-cyan-400"> Huawei Certified</span>, with
              hands-on experience through a Huawei internship. I actively
              participated in{" "}
              <span className="text-cyan-400">
                EGYPES – Egypt Energy Show 2024 and 2025
              </span>
              , gaining real-world exposure to cutting-edge energy and
              sustainability innovations. I am also{" "}
              <span className="text-cyan-400">
                Process Safety Management (PSM) certified
              </span>
              .
            </p>
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
                Technical Engineering
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Circuit Design", "Arduino", "MATLAB", "PCB Design"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="technical-skills-items px-4 py-2 rounded-full text-sm border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                    >
                      {skill}
                    </span>
                  ),
                )}
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

      {/* CERTIFICATES */}
      <section id="certificates-section" className="py-20 text-center">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-6
          shadow-2xl shadow-cyan-800/40
          hover:shadow-cyan-600/50 transition-all duration-500"
        >
          <h4 className="text-cyan-400 text-3xl font-semibold mb-4">
            Certificates & Achievements
          </h4>

          <p className="text-gray-400 leading-relaxed mb-5">
            Certified by{" "}
            <span className="text-cyan-400 font-medium">Huawei (HCIA)</span>{" "}
            with practical experience through a{" "}
            <span className="text-cyan-400 font-medium">Huawei Internship</span>
            . Participated in{" "}
            <span className="text-cyan-400 font-medium">
              EGYPES – Egypt Energy Show 2024 and 2025 and 2026
            </span>{" "}
            -{" "}
            <span className="text-cyan-400 font-medium">
              Process Safety Management certified
            </span>
            .
          </p>

          <div className="flex flex-col-reverse md:flex-row justify-center gap-6">
            <div>
              <Image
                src={certificateImg1}
                alt="certificate1"
                className="rounded-3xl shadow-lg w-[70%] mx-auto object-cover object-bottom"
              />
            </div>
            <div>
              <Image
                src={certificateImg2}
                alt="certificate2"
                className="rounded-3xl shadow-lg mx-auto object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-20 px-4 text-center">
        <h2 className="text-cyan-400 text-3xl font-bold mb-10">
          Contact me anytime
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div
            className="w-full p-15 rounded-xl
          shadow-2xl shadow-cyan-800/40
          hover:scale-[1.01] hover:shadow-cyan-600/50 duration-500 
          transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-cyan-400 text-5xl mb-3"
            />
            <h5 className="font-bold text-xl">Email (iCloud)</h5>
            <p className="text-gray-400 text-sm">ziadtamer.ayesh@icloud.com</p>
          </div>

          <div
            className="w-full p-15 rounded-xl
          shadow-2xl shadow-cyan-800/40
          hover:scale-[1.01] hover:shadow-cyan-600/50 duration-500 
          transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faEnvelopeRegular}
              className="text-cyan-400 text-5xl mb-3"
            />
            <h5 className="font-bold text-xl">Email (Gmail)</h5>
            <p className="text-gray-400 text-sm">ziadtamer.ayesh@gmail.com</p>
          </div>

          <div
            className="w-full p-15 rounded-xl
          shadow-2xl shadow-cyan-800/40
          hover:scale-[1.01] hover:shadow-cyan-600/50 duration-500 
          transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="text-cyan-400 text-5xl mb-3"
            />
            <h5 className="font-bold text-xl">Phone</h5>
            <p className="text-gray-400 text-sm">+20 101 518 8971</p>
          </div>
        </div>
      </section>
    </div>
  );
}
