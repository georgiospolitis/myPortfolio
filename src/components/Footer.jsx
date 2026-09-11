import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

import { navLinks } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="max-w-container mx-auto sm:px-10 px-6 py-16 grid sm:grid-cols-[1.3fr,1fr,1fr] gap-12">
        <div>
          <p className="font-serif text-[20px] text-ink">GEORGIOS POLITIS</p>
          <p className="mt-3 text-stone text-[15px] max-w-xs">
            Web Development · E-commerce · Digital Experiences
          </p>
        </div>

        <div>
          <p className="text-[13px] uppercase tracking-[0.14em] text-stone mb-4">
            Μενου
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="text-[15px] text-ink/80 hover:text-clay transition-colors"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] uppercase tracking-[0.14em] text-stone mb-4">
            Επικοινωνια
          </p>
          <ul className="flex flex-col gap-3 mb-5">
            <li>
              <a
                href="mailto:gpolitis.dev@gmail.com"
                className="text-[15px] text-ink/80 hover:text-clay transition-colors"
              >
                gpolitis.dev@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/giorgospolitis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="https://github.com/georgiospolitis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.instagram.com/george__politis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              <FiInstagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/giorgos.plts.9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              <FiFacebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="max-w-container mx-auto sm:px-10 px-6 py-6 text-stone text-[13px]">
          © {year} Georgios Politis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
