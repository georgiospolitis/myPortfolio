import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CTA = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

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
          message: form.message,
        },
        "5tIvp5084QsjiLT_O"
      )
      .then(
        () => {
          setLoading(false);
          alert("Σας ευχαριστώ. Θα επικοινωνήσω μαζί σας το συντομότερο δυνατό.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.");
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
        <h2 className={styles.h2}>Έχετε κάποιο project στο μυαλό σας;</h2>
        <p className="mt-4 text-stone text-[17px] sm:text-[18px] leading-[1.7]">
          Ας φτιάξουμε κάτι που λειτουργεί για την επιχείρησή σας.
        </p>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-[1fr,1fr] gap-14 items-start max-w-4xl mx-auto">
        <motion.form
          variants={fadeIn("right", "tween", 0.15, 0.7)}
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
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
              Πείτε μου για το project σας
            </span>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Τι θα θέλατε να κατασκευάσουμε;"
              className="bg-paper border border-line py-3.5 px-5 rounded-xl placeholder:text-stone/60 text-ink outline-none focus:border-ink transition-colors resize-none"
            />
          </label>

          <button type="submit" className={`${styles.btnPrimary} w-fit mt-2`}>
            {loading ? "Αποστολή..." : "Ξεκινήστε ένα project"}
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