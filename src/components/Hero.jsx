import { motion } from "framer-motion";

const industries = [
  "Restaurants",
  "Cafés & Bars",
  "Hotels",
  "Barbershops",
  "Beauty Studios",
  "Local Shops",
  "E-commerce Brands",
];

const tags = [
  { label: "Restaurants", className: "top-[6%] left-[4%] -rotate-6 bg-cream border border-line" },
  { label: "Hotels", className: "top-[2%] right-[6%] rotate-3 bg-clay text-cream" },
  { label: "Barbershops", className: "bottom-[30%] left-[0%] rotate-2 bg-cream border border-line" },
  { label: "E-commerce", className: "bottom-[8%] right-[2%] -rotate-3 bg-sage text-cream" },
];

const Hero = () => {
  return (
    <section id="top" className="relative w-full pt-[96px]">
      <div className="max-w-container mx-auto sm:px-10 px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.18em] text-clay mb-6">
            Web Development · E-commerce · Digital Experiences
          </p>
          <h1 className="font-serif text-ink font-medium leading-[1.05] text-[42px] xs:text-[52px] sm:text-[64px] lg:text-[72px] tracking-[-0.01em]">
            Websites built for
            <br />
            businesses that want{" "}
            <span className="italic text-clay">to grow.</span>
          </h1>
          <p className="mt-7 text-stone text-[17px] sm:text-[19px] leading-[1.7] max-w-lg">
            Modern websites, e-commerce stores and custom digital solutions
            designed around your business.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <button className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-4 rounded-full text-[15px] font-medium tracking-wide transition-all duration-300 hover:bg-clay hover:-translate-y-0.5">
                Start a project
              </button>
            </a>
            <a href="#work">
              <button className="inline-flex items-center justify-center gap-2 bg-transparent text-ink px-7 py-4 rounded-full text-[15px] font-medium tracking-wide border border-ink/20 transition-all duration-300 hover:border-ink hover:-translate-y-0.5">
                View my work
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative h-[380px] sm:h-[440px] lg:h-[480px] hidden sm:block"
        >
          <div className="absolute inset-[6%] rounded-[28px] bg-ink flex items-center justify-center overflow-hidden">
            <span className="font-serif text-[220px] leading-none text-cream/10 select-none">
              GP
            </span>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-cream/70 text-[13px] uppercase tracking-[0.14em]">
                Est. Freelance Studio
              </span>
              <span className="w-2 h-2 rounded-full bg-clay" />
            </div>
          </div>

          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`absolute px-4 py-2.5 rounded-full text-[13px] font-medium shadow-soft ${tag.className}`}
            >
              {tag.label}
            </span>
          ))}

          <span className="absolute top-[38%] right-[-2%] bg-cream border border-line rounded-full px-4 py-2.5 shadow-soft flex items-center gap-2 text-[13px] font-medium text-ink">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-clay" />
            </span>
            Open for new projects
          </span>
        </motion.div>
      </div>

      <div className="border-y border-line bg-paper overflow-hidden">
        <div className="flex w-max marquee-track py-5">
          {[...industries, ...industries].map((item, i) => (
            <span
              key={i}
              className="mx-6 text-[14px] uppercase tracking-[0.14em] text-stone whitespace-nowrap"
            >
              {item} <span className="text-clay ml-6">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
