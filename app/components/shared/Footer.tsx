export function Footer() {
  return (
    <footer className="border-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <p className="text-gray-500 text-sm leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">Ziad Tamer</span>.
          <br className="md:hidden" />
          All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <a href="#hero-section" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about-section" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills-section" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#contact-section" className="hover:text-cyan-400 transition">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/ziad-tamer-ayesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-600 text-xs">
          Designed & developed by <span className="text-cyan-400 font-medium">WebCanvas</span>.
        </p>
      </div>
    </footer>
  );
}
