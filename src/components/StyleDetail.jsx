import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from "react-icons/fi";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { styleCustomizations } from "../constants";
import { useModal } from "../utils/useModal";
import StylePreview from "./StylePreview";
import StyleFullPreview from "./StyleFullPreview";

// The scrollable in-dialog preview only makes sense with room for it; on
// phones the dialog shows the first screen and the full preview does the rest.
const useWideScreen = () => {
  const query = "(min-width: 640px)";
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setWide(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return wide;
};

const DetailHeading = ({ children }) => (
  <p className="text-[12px] uppercase tracking-[0.16em] text-stone mb-3">{children}</p>
);

DetailHeading.propTypes = { children: PropTypes.node };

const StyleDetail = ({ style, position, total, onClose, onChoose, onPrev, onNext }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previewButtonRef = useRef(null);
  const [fullPreview, setFullPreview] = useState(false);
  const fullPreviewRef = useRef(false);
  fullPreviewRef.current = fullPreview;
  const wide = useWideScreen();

  useModal(dialogRef, onClose, { initialFocusRef: closeRef, pausedRef: fullPreviewRef });

  const closeFullPreview = useCallback(() => {
    setFullPreview(false);
    previewButtonRef.current?.focus({ preventScroll: true });
  }, []);

  const titleId = `style-${style.slug}-title`;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6">
      <motion.div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-5xl max-h-[92vh] bg-cream rounded-t-[24px] sm:rounded-[24px] shadow-soft flex flex-col overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Κλείσιμο"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream/90 border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
        >
          <FiX size={18} />
        </button>

        <div key={style.slug} className="flex-1 min-h-0 overflow-y-auto grid lg:grid-cols-[1.1fr,1fr]">
          <div className="bg-paper border-b lg:border-b-0 lg:border-r border-line p-6 sm:p-10 flex flex-col gap-6">
            <div className={wide ? "h-[400px] lg:h-[460px]" : "aspect-[4/3]"}>
              <StylePreview style={style} mode={wide ? "detail" : "card"} />
            </div>

            <div className="flex flex-col gap-3">
              <button
                ref={previewButtonRef}
                type="button"
                onClick={() => setFullPreview(true)}
                aria-haspopup="dialog"
                className={`${styles.btnSecondary} w-fit !py-3.5`}
              >
                <FiMaximize2 size={16} /> Προεπισκόπηση ιστοσελίδας
              </button>
              <p className="text-[13px] text-stone leading-[1.6]">
                {wide && "Κάντε κύλιση στο παράθυρο για να δείτε όλη την αρχική σελίδα. "}
                Ενδεικτικό δείγμα σχεδιαστικής κατεύθυνσης — {style.sample.business} «
                {style.sample.brand}» και το περιεχόμενο είναι φανταστικά.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <p className="text-[13px] uppercase tracking-[0.16em] text-clay mb-3">
              {String(position + 1).padStart(2, "0")} · {style.category}
            </p>
            <h2
              id={titleId}
              className="font-serif text-ink text-[30px] sm:text-[36px] font-medium leading-[1.15] pr-10"
            >
              {style.name}
            </h2>
            <p className="mt-4 text-stone text-[16px] leading-[1.7]">{style.description}</p>

            <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
              <p className="font-serif text-ink text-[18px]">Αφετηρία, όχι έτοιμο template</p>
              <p className="mt-1.5 text-stone text-[15px] leading-[1.65]">
                Χρησιμοποιώ αυτό το στυλ ως σχεδιαστική βάση και προσαρμόζω την τελική
                ιστοσελίδα γύρω από το brand, το περιεχόμενο και τις ανάγκες σας.
              </p>
            </div>

            <div className="mt-8">
              <DetailHeading>Ιδανικο για</DetailHeading>
              <div className="flex flex-wrap gap-2">
                {style.recommendedFor.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-ink/80 border border-line rounded-full px-3.5 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <DetailHeading>Τι περιλαμβανει συνηθως</DetailHeading>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {style.features.map((feature) => (
                  <li key={feature} className="text-[15px] text-ink/80 flex items-start gap-2.5">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <DetailHeading>Τι προσαρμοζεται</DetailHeading>
              <div className="flex flex-wrap gap-2">
                {styleCustomizations.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-ink/80 bg-paper border border-line rounded-full px-3.5 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 text-[13px] text-stone leading-[1.6]">
              Κατασκευή σε WordPress · {style.wordpressStack.join(" · ")}
              {style.supportsWooCommerce
                ? " · Πλήρες e-shop με WooCommerce"
                : " · Μπορεί να επεκταθεί με e-shop (WooCommerce)"}
            </p>
          </div>
        </div>

        <div className="shrink-0 border-t border-line bg-cream px-4 sm:px-10 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Προηγούμενο στυλ"
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink hover:border-ink transition-colors"
            >
              <FiArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Επόμενο στυλ"
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink hover:border-ink transition-colors"
            >
              <FiArrowRight size={18} />
            </button>
            <span className="hidden sm:inline text-[13px] text-stone ml-2" aria-live="polite">
              {position + 1} / {total}
            </span>
          </div>

          <button type="button" onClick={() => onChoose(style)} className={`${styles.btnPrimary} !px-5 sm:!px-6 !py-3.5 whitespace-nowrap`}>
            Ξεκινήστε με αυτό το στυλ
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {fullPreview && (
          <StyleFullPreview
            key="full-preview"
            style={style}
            onClose={closeFullPreview}
            onChoose={onChoose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

StyleDetail.propTypes = {
  style: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    recommendedFor: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    wordpressStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    supportsWooCommerce: PropTypes.bool,
    sample: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      business: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  position: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onChoose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default StyleDetail;
