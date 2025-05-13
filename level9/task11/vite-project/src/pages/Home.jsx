// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

function Home({ reduceMotion }) {
  if (reduceMotion) {
    return <h1>Home Page</h1>; // No animation
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Home Page</h1>
    </motion.div>
  );
}

export default Home;
