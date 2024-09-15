'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={ { once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto $
      {styles.flexCenter} flex-col`}
    >
      <TypingText title = "| About Leo T Engineering"
      textStyles = "text-center" />

      <motion.p
      variants={fadeIn('up', 'tween', 0.02, 1)}
      className='mt-[8px] font-normal sm:text-[32px] text-[20px]
      text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>
        Leo
        </span> T Engineering Services was formed by a group of mechanical
        and electrical engineers with wide industrial experience.   Members
        of our team have experience in Pharmaceutical, Chemical, Fertilizer,
        Oil & Gas, Communications, Power Industry, etc. <span className='font-extrabold text-white'>
        Our expertise include
        </span> design, erection, testing and commissioning of industrical equipment,
        packages and plants. We provide chartered engineering services to
        various industries and our services include asset valuation, remnant
        life evaluations, depreciation assessments, etc. <span className='font-extrabold text-white'>
        We are well equipped
        </span> with tools and equipment for evaluation of health of equipment, 
        measurement of corrosion levels and calibration of various measuring
        equipment.  We are a Competent Institution  licensed to carry out 
        testing and certification of pressure vessels, lifting equipment and
        lifts/hoists, etc., as per the rules of the Kerala State Factories
        and Boilers Department.
      </motion.p>

      <motion.img
       variants={fadeIn('up', 'tween', 0.3, 1)}
       src='/arrow-down.svg'
       alt='arrow-down'
       className='w-[18px] h-[28px] object-contain
        mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
