import React from 'react';
import { motion } from 'framer-motion';

const TileHoverEffect = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 2,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="rounded-lg p-2"
    >
      {children}
    </motion.div>
  );
};

export default TileHoverEffect;
