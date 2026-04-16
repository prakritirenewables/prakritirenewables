import React from 'react';
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import StatsSection from './components/StatsSection';
import CTA from './components/CTA'; // Using the fixed CTA we just built
import Footer from './components/Footer';

export default function Commercial() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary/10">
      <Navbar />
      
      {/* SHRUNK PADDING: pt-24 (matching Residential/About) */}
      <main className="flex-grow pt-24 px-8 max-w-6xl mx-auto w-full">
        
        {/* CONDENSED COMMERCIAL HERO */}
        <section className="mb-16 border-b border-stone-100 pb-12 flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] text-[9px] uppercase mb-4 block"
            >
              Utility-Scale Solutions
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-[0.9] mb-6"
            >
              Industrial Power. <br />
              <span className="italic font-light text-stone-400">Institutional ROI.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-stone-500 text-base max-w-md leading-relaxed mb-8"
            >
              Accelerate your transition to net-zero with solar infrastructure 
              designed for high-demand industrial ecosystems. We optimize 
              your energy P&L through technical precision.
            </motion.p>

            {/* TECHNICAL SPECS BAR */}
            <div className="flex gap-8 border-t border-stone-50 pt-6">
               <div>
                  <p className="text-[8px] font-black text-stone-300 uppercase tracking-widest mb-1">Grid Sync</p>
                  <p className="text-[11px] font-bold text-primary">Active-Response</p>
               </div>
               <div>
                  <p className="text-[8px] font-black text-stone-300 uppercase tracking-widest mb-1">PPA Ready</p>
                  <p className="text-[11px] font-bold text-primary">Certified</p>
               </div>
            </div>
          </div>

          {/* COMPACT INDUSTRIAL VISUAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full h-[380px] rounded-3xl overflow-hidden shadow-xl border border-stone-100 relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2070&auto=format&fit=crop" 
              alt="Institutional Solar"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute top-4 right-4 z-20">
               <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-primary">
                  Utility-Grade
               </span>
            </div>
          </motion.div>
        </section>

        {/* Supporting Commercial Sections */}
        <BentoGrid />
        <StatsSection />
        
        <CTA />
      </main>
    </div>
  );
}