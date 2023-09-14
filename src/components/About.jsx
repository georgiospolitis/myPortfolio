import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      &nbsp;I am a dedicated person with a strong passion for frontend development.
      With a Bachelor's Degree in Applied Informatics and valuable experience
      as a Junior Frontend Developer, I am actively seeking opportunities to
      expand my skill set and contribute to a dynamic work environment.
      <br/>
      <br/>
      &nbsp;Throughout my career, I have cultivated a flexible and adaptable
      approach, allowing me to excel in diverse professional settings.
      I am committed to continuous growth and constantly strive to enhance
      my existing skills. With a solid work ethic and a keen eye for detail,
      I consistently deliver high-quality results.
      <br/>
      <br/>
      &nbsp;My exceptional communication skills enable me to effectively collaborate
      with individuals from various backgrounds. I am an attentive listener
      and a quick learner, always open to new ideas and eager to adapt to any
      task or challenge. I excel in time management, efficiently prioritizing
      tasks to meet deadlines effectively.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")