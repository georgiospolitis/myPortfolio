import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import logo from "../assets/logo.svg";

const facts = [
  "Αλεξάνδρεια Ημαθίας",
  "Συνεργασία από κοντά ή online",
  "WordPress & custom ανάπτυξη",
];

const About = () => {
  return (
    <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-14 items-center">
      <motion.div
        variants={fadeIn("right", "tween", 0.1, 0.7)}
        className="relative aspect-[4/5] rounded-[24px] bg-ink flex items-center justify-center mx-auto max-w-sm w-full"
      >
        <img src={logo} alt="Λογότυπο Γεώργιος Πολίτης" className="w-2/3 max-w-[180px] select-none" />
      </motion.div>

      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.eyebrow}>Σχετικα</p>
          <h2 className={styles.h2}>Λίγα λόγια για μένα</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "tween", 0.15, 0.7)}
          className="mt-6 text-stone text-[17px] sm:text-[18px] leading-[1.75] max-w-xl"
        >
          Είμαι ο Γιώργος και φτιάχνω ιστοσελίδες και e-shops για μικρές και μεσαίες
          επιχειρήσεις. Δουλεύω κυρίως με WordPress και, όταν ένα project χρειάζεται κάτι
          πιο ειδικό, με custom κώδικα.
          <br />
          <br />
          Δεν υπάρχουν μεσάζοντες. Μιλάτε απευθείας με εμένα, που φτιάχνω το site σας,
          από την πρώτη συζήτηση μέχρι να βγει online — και μετά.
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