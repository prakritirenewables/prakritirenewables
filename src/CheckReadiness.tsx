import React from 'react';
import { motion } from "framer-motion";
import FeasibilitySection from "./components/FeasibilitySection";
import CTASection from "./components/CTASection";

export default function CheckReadiness() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
      
      {/* UNIQUE HERO SECTION */}
      <section className="mb-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block"
          >
            Diagnostic Engine v2.0
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-none mb-8"
          >
            Precision Solar <br />
            <span className="italic font-light text-stone-400">Readiness Audit.</span>
          </motion.h1>
          
          <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
            Our intelligent diagnostic tools evaluate your property's 
            photovoltaic potential and financial ROI in real-time.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20"
        >
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200" 
            alt="Advanced Solar Array"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
      <FeasibilitySection />
      <CTASection />
    </main>
  );
}