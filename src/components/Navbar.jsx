import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto sm:px-10 px-6 h-[76px] flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-[16px] sm:text-[18px] tracking-[0.02em] text-ink font-medium"
          onClick={() => setToggle(false)}
        >
          GEORGIOS POLITIS
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="text-[15px] text-ink/80 hover:text-ink transition-colors relative group"
              >
                {nav.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-clay transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex">
          <button className="bg-ink text-cream px-6 py-3 rounded-full text-[14px] font-medium tracking-wide transition-all duration-300 hover:bg-clay">
            Start a project
          </button>
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle menu"
        >
          {toggle ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {toggle && (
        <div className="md:hidden bg-cream border-t border-line">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="text-[17px] text-ink font-medium"
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setToggle(false)}>
                <button className="w-full bg-ink text-cream px-6 py-3.5 rounded-full text-[15px] font-medium mt-2">
                  Start a project
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
