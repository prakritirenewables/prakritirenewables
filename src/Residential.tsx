import React from 'react';
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Categorization from './components/Categorization';
import Excellence from './components/Excellence';
import Footer from './components/Footer';

export default function Residential() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10">
      <Navbar />
      
      <main className="pt-24 pb-20 px-8 max-w-6xl mx-auto w-full">
        
        {/* RIGHT ALIGNED HERO */}
        <section className="mb-16 border-b border-stone-100 pb-12 text-right">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-[9px] uppercase mb-4 block"
          >
            Residential Division
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-[0.9] mb-6"
          >
            Your Roof. <br />
            <span className="italic font-light text-stone-400">Your Power Plant.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 text-base max-w-xl leading-relaxed ml-auto"
          >
            Engineering high-efficiency residential systems specifically for the 
            Indian climate. Transition to energy independence with zero-grid 
            dependency.
          </motion.p>
        </section>

        <Categorization />
        <Excellence />
      </main>
    </div>
  );
}