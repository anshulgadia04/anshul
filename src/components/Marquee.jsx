import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({reverse = true}) =>  {
    
  return (
    <div className="bg-[#FFCB77] text-black font-semibold uppercase py-2 text-xl shadow-2xl overflow-hidden">
      <motion.div
        className="p-2 w-[150%] flex flex-row gap-5 items-center border-y whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'], }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 20, // control speed (lower = faster)
        }}
      >
        {Array(40).fill('Coming Soon').map((text, index) => (
          <span
            style={{ fontFamily: 'Big Shoulders, sans-serif' }}
            className="tracking-wider"
            key={index}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};


export default Marquee;
