import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calculator, TrendingDown, PhoneCall } from "lucide-react";
import FeasibilitySection from "./components/FeasibilitySection";
import CTASection from "./components/CTASection";

// --- INTERACTIVE SAVINGS ESTIMATOR ---
const SavingsEstimator = () => {
  const [bill, setBill] = useState(15000);

  // Dynamic Solar Math (Simplified for frontend conversion)
  const monthlySavings = Math.round(bill * 0.75); 
  const annualSavings = monthlySavings * 12;
  const roiYears = bill > 50000 ? 3.5 : 4.2; 
  const estimatedSystemSize = (monthlySavings / 1300).toFixed(1);

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 py-16 px-8 bg-stone-50 rounded-[3rem] border border-stone-100 relative overflow-hidden shadow-sm"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 mb-4 bg-emerald-500/10 px-4 py-2 rounded-full">
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">Live ROI Calculator</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-4">
              Stop renting your power. <br/>
              <span className="italic font-light text-stone-400">Start owning it.</span>
           </h3>
           <p className="text-stone-500 text-sm max-w-xl mx-auto font-medium">
              Drag the slider to your average monthly electricity bill to see your projected engineering offset and financial return.
           </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* THE SLIDER INTERFACE */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Current Monthly Bill</label>
                <span className="text-2xl font-black text-primary">{formatINR(bill)}</span>
              </div>
              <input 
                type="range" 
                min="2000" 
                max="100000" 
                step="1000"
                value={bill} 
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between mt-2 text-[9px] font-bold text-stone-300 uppercase">
                <span>₹2,000</span>
                <span>₹1,00,000+</span>
              </div>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-5 h-5 text-emerald-500" />
                <h4 className="text-sm font-bold text-primary">Projected Impact</h4>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-medium">
                A custom-engineered <strong>{estimatedSystemSize} kW</strong> infrastructure would offset your grid reliance, yielding an estimated return on investment in just <strong>{roiYears} years</strong>.
              </p>
            </div>
          </div>

          {/* THE RESULTS & CTA */}
          <div className="bg-primary rounded-4xl p-8 text-white relative overflow-hidden text-center flex flex-col justify-center h-full">
            <div className="relative z-10">
               <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-2">Estimated Annual Savings</p>
               <h4 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-emerald-400">
                  {formatINR(annualSavings)}
               </h4>
               
               <a 
                 href="tel:+919419797658" 
                 className="w-full bg-white text-primary py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl hover:bg-stone-100 transition-all flex items-center justify-center gap-2 group"
               >
                 <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
                 Lock in this projection
               </a>
               <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-4">
                 Direct connect • Jammu Headquarters
               </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default function CheckReadiness() {
  return (
    <main className="pt-20 pb-20 max-w-7xl mx-auto px-8">
      
      {/* UNIQUE HERO SECTION */}
      <section className="mb-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block"
          >
            Diagnostic Engine
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
          className="flex-1 w-full h-100 rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20"
        >
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200" 
            alt="Advanced Solar Array"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* DROPPED IN THE NEW SAVINGS ESTIMATOR HERE */}
      <SavingsEstimator />

      <FeasibilitySection />
      <CTASection />
    </main>
  );
}