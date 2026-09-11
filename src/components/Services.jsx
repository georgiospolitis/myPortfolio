import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceRow = ({ index, title, icon: Icon, description }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.08, 0.6)}
    className="group grid sm:grid-cols-[80px,1fr,auto] grid-cols-[50px,1fr] items-center gap-6 sm:gap-10 py-8 border-b border-line transition-colors duration-300 hover:bg-paper sm:px-4 px-2 -mx-2 sm:-mx-4 rounded-2xl"
  >
    <span className="font-serif text-stone/50 text-[28px] sm:text-[34px] group-hover:text-clay transition-colors duration-300">
      {index}
    </span>

    <div>
      <h3 className="font-serif text-ink text-[22px] sm:text-[26px] font-medium">
        {title}
      </h3>
      <p className="mt-2 text-stone text-[15px] sm:text-[16px] leading-[1.6] max-w-xl">
        {description}
      </p>
    </div>

    <div className="hidden sm:flex w-12 h-12 rounded-full border border-line items-center justify-center group-hover:border-clay group-hover:bg-clay group-hover:text-cream transition-all duration-300 text-ink">
      <Icon size={20} />
    </div>
  </motion.div>
);

ServiceRow.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.eyebrow}>Υπηρεσιες</p>
        <h2 className={styles.h2}>Τι μπορώ να κατασκευάσω για εσάς</h2>
      </motion.div>

      <div className="mt-14">
        {services.map((service) => (
          <ServiceRow key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");