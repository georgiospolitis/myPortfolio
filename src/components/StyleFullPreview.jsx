import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMonitor, FiSmartphone } from "react-icons/fi";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { useModal } from "../utils/useModal";
import { BrowserBar, DemoRenderer } from "./StylePreview";

const devices = [
  { id: "desktop", label: "Υπολογιστής", icon: FiMonitor },
  { id: "mobile", label: "Κινητό", icon: FiSmartphone },
];

// Full-size, scrollable demo homepage inside the portfolio, with an optional
// phone-sized frame. Stacks on top of the style detail dialog.
const StyleFullPreview = ({ style, onClose, onChoose }) => {
  const dialogRef = useRef(null);
  const backRef = useRef(null);
  const [device, setDevice] = useState("desktop");
  useModal(dialogRef, onClose, { initialFocusRef: backRef });

  const isMobile = device === "mobile";
  const scrollLabel = `Ιστοσελίδα-δείγμα για το στυλ ${style.name}. Κάντε κύλιση για να τη δείτε ολόκληρη.`;

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Προεπισκόπηση ιστοσελίδας: ${style.name}`}
      className="fixed inset-0 z-[70] bg-[#E6E1D7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="shrink-0 bg-cream border-b border-line">
        <div className="h-[68px] px-3 sm:px-6 flex items-center gap-3 sm:gap-5">
          <button
            ref={backRef}
            type="button"
            onClick={onClose}
            className="shrink-0 inline-flex items-center gap-2 h-11 px-3.5 rounded-full border border-line text-ink text-[14px] font-medium hover:border-ink transition-colors"
          >
            <FiArrowLeft size={17} />
            <span className="hidden sm:inline">Πίσω</span>
            <span className="sr-only sm:hidden">Πίσω στο στυλ</span>
          </button>

          <div className="min-w-0 flex-1 md:flex-none">
            <p className="font-serif text-ink text-[17px] leading-tight truncate">{style.name}</p>
            <p className="text-[12px] text-stone truncate">Ενδεικτικό δείγμα σχεδιαστικής κατεύθυνσης</p>
          </div>

          <div
            role="group"
            aria-label="Μέγεθος προεπισκόπησης"
            className="hidden md:flex mx-auto rounded-full border border-line bg-paper p-1"
          >
            {devices.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                aria-pressed={device === id}
                onClick={() => setDevice(id)}
                className={`inline-flex items-center gap-2 h-9 px-4 rounded-full text-[14px] font-medium transition-colors ${
                  device === id ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
                }`}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onChoose(style)}
            className={`${styles.btnPrimary} shrink-0 !px-4 sm:!px-6 !py-3 whitespace-nowrap`}
          >
            <span className="sm:hidden">Επιλογή</span>
            <span className="hidden sm:inline">Ξεκινήστε με αυτό το στυλ</span>
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex justify-center md:p-6">
        <div
          key={device}
          className={
            isMobile
              ? "w-[390px] h-full max-h-[860px] rounded-[44px] border-[12px] border-ink bg-white shadow-soft overflow-hidden flex flex-col"
              : "w-full max-w-[1440px] h-full md:rounded-[14px] bg-white shadow-soft overflow-hidden flex flex-col"
          }
        >
          {!isMobile && <BrowserBar label={`Ενδεικτικό δείγμα · ${style.sample.brand}`} className="hidden md:flex" />}
          <div
            tabIndex={0}
            role="region"
            aria-label={scrollLabel}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain focus:outline-none"
          >
            <DemoRenderer slug={style.slug} />
          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

StyleFullPreview.propTypes = {
  style: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sample: PropTypes.shape({ brand: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onChoose: PropTypes.func.isRequired,
};

export default StyleFullPreview;
