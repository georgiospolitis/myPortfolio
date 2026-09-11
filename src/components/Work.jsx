import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const toneStyles = {
  clay: "bg-clay text-cream",
  ink: "bg-ink text-cream",
  sage: "bg-sage text-cream",
};

const ProjectRow = ({ index, label, category, name, description, tags, tone, i }) => (
  <motion.div
    variants={fadeIn("up", "tween", i * 0.1, 0.7)}
    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 border-b border-line last:border-b-0 ${
      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
    }`}
  >
    <div
      className={`relative aspect-[4/3] rounded-[24px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 transition-transform duration-500 ease-editorial hover:scale-[0.98] ${toneStyles[tone]}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[13px] uppercase tracking-[0.16em] opacity-70">
          {label}
        </span>
        <span className="font-serif text-[20px] opacity-70">{index}</span>
      </div>
      <h3 className="font-serif text-[32px] sm:text-[40px] leading-[1.1]">
        {category}
      </h3>
    </div>

    <div>
      <p className="text-[13px] uppercase tracking-[0.16em] text-clay mb-4">
        {category}
      </p>
      <h4 className="font-serif text-ink text-[26px] sm:text-[30px] font-medium leading-[1.2]">
        {name}
      </h4>
      <p className="mt-4 text-stone text-[16px] leading-[1.7] max-w-md">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[13px] text-ink/70 border border-line rounded-full px-3.5 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.eyebrow}>Selected Work</p>
        <h2 className={styles.h2}>Concept projects, built to show what’s possible</h2>
      </motion.div>

      <p className="mt-6 text-stone text-[16px] sm:text-[17px] leading-[1.7] max-w-2xl">
        I’m building my freelance portfolio, so the projects below are concept
        / demo work rather than real client sites — designed to show the kind
        of website I’d build for a business like yours.
      </p>

      <div className="mt-10">
        {projects.map((project, i) => (
          <ProjectRow key={project.name} {...project} i={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
