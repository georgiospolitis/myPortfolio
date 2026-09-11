import { motion } from "framer-motion";

import { styles } from "../styles";
import { process } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Process = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.eyebrow}>Process</p>
        <h2 className={styles.h2}>How a project comes together</h2>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-4 gap-10 sm:gap-6">
        {process.map((step, i) => (
          <motion.div
            key={step.title}
            variants={fadeIn("up", "tween", i * 0.1, 0.6)}
            className="relative pl-6 sm:pl-0 sm:pt-8 border-l sm:border-l-0 sm:border-t border-line"
          >
            <span className="font-serif text-clay text-[20px] block mb-3">
              {step.index}
            </span>
            <h3 className="font-serif text-ink text-[20px] font-medium">
              {step.title}
            </h3>
            <p className="mt-2 text-stone text-[15px] leading-[1.6]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Process, "process");
