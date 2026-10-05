import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { websiteStyles, STYLE_SELECTED_EVENT } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import StylePreview from "./StylePreview";
import StyleDetail from "./StyleDetail";

const steps = [
  "Διαλέγετε το στυλ που σας ταιριάζει",
  "Το προσαρμόζω στο brand και το περιεχόμενό σας",
  "Παραλαμβάνετε τη δική σας ιστοσελίδα WordPress",
];

// The heading and each card reveal on their own: on small screens this section
// is too tall to ever be 20% in view, so SectionWrapper's trigger never fires.
const revealOnScroll = (i) => ({
  variants: fadeIn("up", "tween", (i % 2) * 0.1, 0.7),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
});

const Tags = ({ tags }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="text-[13px] text-ink/70 border border-line rounded-full px-3.5 py-1.5"
      >
        {tag}
      </span>
    ))}
  </div>
);

Tags.propTypes = { tags: PropTypes.arrayOf(PropTypes.string).isRequired };

const StyleCard = ({ style, i, onOpen }) => (
  <motion.article {...revealOnScroll(i)} className="group relative">
    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-paper border border-line p-5 sm:p-7 transition-transform duration-500 ease-editorial group-hover:scale-[0.98]">
      <StylePreview style={style} />
      <span className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 w-11 h-11 rounded-full bg-ink text-cream flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <FiArrowUpRight size={18} />
      </span>
    </div>

    <div className="mt-7">
      <p className="text-[13px] uppercase tracking-[0.16em] text-clay mb-3">
        {String(i + 1).padStart(2, "0")} · {style.category}
      </p>
      <h3 className="font-serif text-ink text-[24px] sm:text-[28px] font-medium leading-[1.2]">
        {style.name}
      </h3>
      <p className="mt-3 text-stone text-[16px] leading-[1.7] max-w-md">{style.description}</p>
      <Tags tags={style.tags} />

      {/* Stretched button: the whole card is clickable, but its accessible name stays short. */}
      <button
        type="button"
        onClick={(e) => onOpen(i, e.currentTarget)}
        aria-haspopup="dialog"
        className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink group-hover:text-clay transition-colors after:absolute after:inset-0 after:content-[''] after:rounded-[24px] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-clay"
      >
        Δείτε το στυλ <span className="sr-only">{style.name}</span>
        <FiArrowRight size={16} />
      </button>
    </div>
  </motion.article>
);

StyleCard.propTypes = {
  style: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};

const CustomCard = ({ i }) => (
  <motion.article {...revealOnScroll(i)} className="group relative">
    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-ink text-cream flex flex-col justify-between p-8 sm:p-10 transition-transform duration-500 ease-editorial group-hover:scale-[0.98]">
      <span className="text-[13px] uppercase tracking-[0.16em] opacity-70">Custom</span>
      <p className="font-serif text-[32px] sm:text-[40px] leading-[1.1]">
        Κάτι εντελώς
        <br />
        <span className="italic text-clay-light">δικό σας.</span>
      </p>
      <span className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 w-11 h-11 rounded-full bg-cream/15 flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <FiArrowUpRight size={18} />
      </span>
    </div>

    <div className="mt-7">
      <p className="text-[13px] uppercase tracking-[0.16em] text-clay mb-3">Απο το μηδεν</p>
      <h3 className="font-serif text-ink text-[24px] sm:text-[28px] font-medium leading-[1.2]">
        Δεν βρήκατε αυτό που ψάχνατε;
      </h3>
      <p className="mt-3 text-stone text-[16px] leading-[1.7] max-w-md">
        Αν κανένα στυλ δεν σας εκφράζει, σχεδιάζω την ιστοσελίδα σας από την αρχή, γύρω
        από το brand και τους στόχους σας.
      </p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink group-hover:text-clay transition-colors after:absolute after:inset-0 after:content-[''] after:rounded-[24px] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-clay"
      >
        Ας το συζητήσουμε <FiArrowRight size={16} />
      </a>
    </div>
  </motion.article>
);

CustomCard.propTypes = { i: PropTypes.number.isRequired };

const WebsiteStyles = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const triggerRef = useRef(null);
  const total = websiteStyles.length;

  const openStyle = useCallback((index, trigger) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  }, []);

  const closeStyle = useCallback(() => {
    setActiveIndex(null);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  const showPrev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const showNext = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);

  // Hand the chosen style to the contact form, then take the visitor there.
  const chooseStyle = useCallback((style) => {
    setActiveIndex(null);
    window.dispatchEvent(
      new CustomEvent(STYLE_SELECTED_EVENT, { detail: { slug: style.slug, name: style.name } })
    );
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const active = activeIndex !== null ? websiteStyles[activeIndex] : null;

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className={styles.eyebrow}>Στυλ ιστοσελιδας</p>
        <h2 className={styles.h2}>Διαλέξτε ένα στυλ. Εγώ το κάνω δικό σας.</h2>
      </motion.div>

      <p className="mt-6 text-stone text-[16px] sm:text-[17px] leading-[1.7] max-w-2xl">
        Επιλέξτε τη σχεδιαστική κατεύθυνση που σας αρέσει. Τη χρησιμοποιώ ως αφετηρία
        και προσαρμόζω την τελική ιστοσελίδα WordPress γύρω από το brand, το περιεχόμενο
        και τις ανάγκες της επιχείρησής σας — από τα χρώματα και την τυπογραφία μέχρι τις
        ενότητες, τη λειτουργικότητα και το e-shop.
      </p>

      <ol className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-8">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3 text-[14px] text-ink/80">
            <span className="font-serif text-clay text-[18px]">{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-14 grid md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-16">
        {websiteStyles.map((style, i) => (
          <StyleCard key={style.slug} style={style} i={i} onOpen={openStyle} />
        ))}
        <CustomCard i={total} />
      </div>

      {createPortal(
        <AnimatePresence>
          {active && (
            <StyleDetail
              key="style-detail"
              style={active}
              position={activeIndex}
              total={total}
              onClose={closeStyle}
              onChoose={chooseStyle}
              onPrev={showPrev}
              onNext={showNext}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default SectionWrapper(WebsiteStyles, "styles");
