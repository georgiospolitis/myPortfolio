import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const facts = [
  "Based in Alexandria, Greece",
  "Remote & on-site clients",
  "Modern web tech · WordPress",
];

const About = () => {
  return (
    <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-14 items-center">
      <motion.div
        variants={fadeIn("right", "tween", 0.1, 0.7)}
        className="relative aspect-[4/5] rounded-[24px] bg-ink flex items-center justify-center mx-auto max-w-sm w-full"
      >
        <span className="font-serif text-cream text-[120px] leading-none select-none">
          GP
        </span>
      </motion.div>

      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.eyebrow}>About</p>
          <h2 className={styles.h2}>The person behind the work</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "tween", 0.15, 0.7)}
          className="mt-6 text-stone text-[17px] sm:text-[18px] leading-[1.75] max-w-xl"
        >
          I’m George, a freelance web developer focused on building modern
          websites, e-commerce experiences and custom web solutions for small
          and medium-sized businesses. I work with modern web technologies as
          well as WordPress, so whichever platform fits your business best,
          you’re covered.
          <br />
          <br />
          I keep things direct — no account managers, no middlemen. You talk
          to the person actually building your site, from the first
          conversation to the day it launches and beyond.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mt-8 flex flex-wrap gap-x-8 gap-y-3"
        >
          {facts.map((fact) => (
            <span
              key={fact}
              className="text-[14px] text-ink/70 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              {fact}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
