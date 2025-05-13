// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  // Detect prefers-reduced-motion setting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const location = useLocation();

  return (
    <Router>
      <div className="page-container">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home reduceMotion={reduceMotion} />} />
            <Route path="/about" element={<About reduceMotion={reduceMotion} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
