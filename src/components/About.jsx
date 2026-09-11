import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import logo from "../assets/logo.svg";

const facts = [
  "Με έδρα την Αλεξάνδρεια, Ελλάδα",
  "Πελάτες εξ αποστάσεως & από κοντά",
  "Σύγχρονες τεχνολογίες web · WordPress",
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
          <h2 className={styles.h2}>Ο άνθρωπος πίσω από τη δουλειά</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "tween", 0.15, 0.7)}
          className="mt-6 text-stone text-[17px] sm:text-[18px] leading-[1.75] max-w-xl"
        >
          Είμαι ο Γιώργος, ένας freelance web developer που εστιάζει στην κατασκευή σύγχρονων 
          ιστοσελίδων, εμπειριών e-commerce και προσαρμοσμένων web λύσεων για μικρές 
          και μεσαίες επιχειρήσεις. Δουλεύω με σύγχρονες τεχνολογίες web καθώς και 
          με WordPress, οπότε όποια πλατφόρμα κι αν ταιριάζει καλύτερα στην επιχείρησή σας, 
          είστε καλυμμένοι.
          <br />
          <br />
          Κρατάω τα πράγματα άμεσα — χωρίς account managers, χωρίς μεσάζοντες. Μιλάτε 
          με τον άνθρωπο που πραγματικά κατασκευάζει το site σας, από την πρώτη 
          συζήτηση μέχρι την ημέρα που θα βγει στον αέρα και μετέπειτα.
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