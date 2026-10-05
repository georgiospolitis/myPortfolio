import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiLinkedin, FiGithub, FiX } from "react-icons/fi";

import { styles } from "../styles";
import { STYLE_SELECTED_EVENT } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CTA = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);

  // A style chosen in the Website Styles section is attached to the enquiry.
  useEffect(() => {
    const onStyleSelected = (e) => {
      setSelectedStyle(e.detail.name);
      formRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener(STYLE_SELECTED_EVENT, onStyleSelected);
    return () => window.removeEventListener(STYLE_SELECTED_EVENT, onStyleSelected);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6o69kgi",
        "template_7y7jff9",
        {
          from_name: form.name,
          to_name: "Giorgos Politis",
          from_email: form.email,
          to_email: "gpolitis.dev@gmail.com",
          message: selectedStyle
            ? `Επιλεγμένο στυλ ιστοσελίδας: ${selectedStyle}\n\n${form.message}`
            : form.message,
        },
        "5tIvp5084QsjiLT_O"
      )
      .then(
        () => {
          setLoading(false);
          alert("Ευχαριστώ! Το μήνυμά σας στάλθηκε και θα σας απαντήσω σύντομα.");
          setForm({ name: "", email: "", message: "" });
          setSelectedStyle(null);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Κάτι πήγε στραβά και το μήνυμα δεν στάλθηκε. Δοκιμάστε ξανά ή στείλτε μου email.");
        }
      );
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="text-center max-w-2xl mx-auto"
      >
        <p className={`${styles.eyebrow} justify-center`}>Επικοινωνια</p>
        <h2 className={styles.h2}>Ας μιλήσουμε για το site σας</h2>
        <p className="mt-4 text-stone text-[17px] sm:text-[18px] leading-[1.7]">
          Γράψτε μου λίγα λόγια για την επιχείρησή σας και θα σας απαντήσω σύντομα.
        </p>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-[1fr,1fr] gap-14 items-start max-w-4xl mx-auto">
        <motion.form
          variants={fadeIn("right", "tween", 0.15, 0.7)}
          ref={formRef}
          onSubmit={handleSubmit}
          tabIndex={-1}
          className="flex flex-col gap-5 outline-none"
        >
          <div aria-live="polite">
            {selectedStyle && (
              <div className="flex items-center justify-between gap-3 rounded-xl border border-clay/30 bg-clay/5 py-3 pl-5 pr-2">
                <p className="text-[14px] text-ink">
                  <span className="text-stone">Επιλεγμένο στυλ: </span>
                  <span className="font-medium">{selectedStyle}</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStyle(null);
                    formRef.current?.focus();
                  }}
                  aria-label="Αφαίρεση επιλεγμένου στυλ"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-ink/70 hover:bg-ink hover:text-cream transition-colors shrink-0"
                >
                  <FiX size={15} />
                </button>
              </div>
            )}
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-ink text-[14px] font-medium">Το όνομά σας</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Μαρία Παπαδοπούλου"
              className="bg-paper border border-line py-3.5 px-5 rounded-xl placeholder:text-stone/60 text-ink outline-none focus:border-ink transition-colors"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-ink text-[14px] font-medium">Το email σας</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="maria@yourbusiness.com"
              className="bg-paper border border-line py-3.5 px-5 rounded-xl placeholder:text-stone/60 text-ink outline-none focus:border-ink transition-colors"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-ink text-[14px] font-medium">
              Τι χρειάζεστε;
            </span>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder={
                selectedStyle
                  ? "Πείτε μου λίγα λόγια για την επιχείρησή σας και τι θα θέλατε στο site."
                  : "Π.χ. νέο site για το εστιατόριό μου, με μενού και κρατήσεις."
              }
              className="bg-paper border border-line py-3.5 px-5 rounded-xl placeholder:text-stone/60 text-ink outline-none focus:border-ink transition-colors resize-none"
            />
          </label>

          <button type="submit" className={`${styles.btnPrimary} w-fit mt-2`}>
            {loading ? "Αποστολή…" : "Αποστολή μηνύματος"}
          </button>
        </motion.form>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.7)}
          className="bg-ink text-cream rounded-[24px] p-8 sm:p-10 h-full flex flex-col justify-between"
        >
          <div>
            <p className="text-[13px] uppercase tracking-[0.16em] text-cream/60">
              Προτιμάτε email;
            </p>
            <a
              href="mailto:gpolitis.dev@gmail.com"
              className="font-serif text-[22px] sm:text-[24px] mt-3 block hover:text-clay transition-colors break-words"
            >
              gpolitis.dev@gmail.com
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="mailto:gpolitis.dev@gmail.com"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-clay hover:border-clay transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/giorgospolitis/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-clay hover:border-clay transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://github.com/georgiospolitis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-clay hover:border-clay transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(CTA, "contact");