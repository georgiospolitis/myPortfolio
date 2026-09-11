import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const toneStyles = {
  clay: "bg-clay text-cream",
  ink: "bg-ink text-cream",
  sage: "bg-sage text-cream",
};

const ProjectPreview = ({ index, label, category, tone, link }) => {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-[13px] uppercase tracking-[0.16em] opacity-70">
          {label}
        </span>
        <span className="font-serif text-[20px] opacity-70">{index}</span>
      </div>
      <h3 className="font-serif text-[32px] sm:text-[40px] leading-[1.1]">
        {category}
      </h3>

      {link && (
        <span className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 w-11 h-11 rounded-full bg-cream/15 flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <FiArrowUpRight size={18} />
        </span>
      )}
    </>
  );

  const className = `group relative aspect-[4/3] rounded-[24px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 transition-transform duration-500 ease-editorial hover:scale-[0.98] ${toneStyles[tone]}`;

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Δείτε το concept project ${category} (ανοίγει σε νέα καρτέλα)`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
};

ProjectPreview.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  category: PropTypes.string,
  tone: PropTypes.oneOf(["clay", "ink", "sage"]),
  link: PropTypes.string,
};

const ProjectRow = ({ index, label, category, name, description, tags, tone, link, i }) => (
  <motion.div
    variants={fadeIn("up", "tween", i * 0.1, 0.7)}
    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 border-b border-line last:border-b-0 ${
      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
    }`}
  >
    <ProjectPreview index={index} label={label} category={category} tone={tone} link={link} />

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

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink hover:text-clay transition-colors"
        >
          Επισκεφθείτε την ιστοσελίδα <FiArrowUpRight size={16} />
        </a>
      )}
    </div>
  </motion.div>
);

ProjectRow.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  tone: PropTypes.oneOf(["clay", "ink", "sage"]),
  link: PropTypes.string,
  i: PropTypes.number,
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.eyebrow}>Επιλεγμενα εργα</p>
        <h2 className={styles.h2}>Concept projects, κατασκευασμένα για να δείξουν τι είναι εφικτό</h2>
      </motion.div>

      <p className="mt-6 text-stone text-[16px] sm:text-[17px] leading-[1.7] max-w-2xl">
        Χτίζω το freelance portfolio μου, οπότε τα παρακάτω έργα είναι concept
        / demo δουλειές και όχι πραγματικά sites πελατών — σχεδιασμένα για να δείξουν το είδος
        της ιστοσελίδας που θα κατασκεύαζα για μια επιχείρηση σαν τη δική σας.
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