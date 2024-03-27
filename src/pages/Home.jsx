import React, { useState, useEffect } from 'react';
import '../styles/Index.css';
import '../styles/Hero.css';
import '../styles/About.css';
import '../styles/Technical.css';
import '../styles/Portfolio.css';
import '../styles/Contact.css';
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Technical } from "../components/Technical";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { motion } from 'framer-motion';

export function Home() {
    const [loading, setLoading] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          setLoading((prevLoading) => {
              if (prevLoading === 100) {
                  clearInterval(interval);
                  return 100;
              }
              return prevLoading + 1;
          });
      }, 20);

      return () => clearInterval(interval);
  }, []);

  return (
    <>
    {loading !== 100 ? (
        <motion.div
            className='loading'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            Loading... {loading}%
        </motion.div>
        ) : (
        <div className="layout">
          <Hero />
          <About />
          <Technical />
          <Portfolio />
          <Contact />
        </div>
        )}
    </>
);
}