// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

function About({ reduceMotion }) {
  if (reduceMotion) {
    return <h1>About Page</h1>; // No animation
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Page</h1>
    </motion.div>
  );
}

export default About;
