import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // IMPORTED THIS
import { Bath, Zap, Home, ShieldCheck, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "01",
    title: "Solar Water Heating",
    icon: Bath,
    desc: "Optimized for high-demand bathrooms and gourmet kitchens.",
    match: "Ideal for: Families of 4-6 seeking 80% geyser bill reduction.",
    tag: "RESIDENTIAL"
  },
  {
    id: "02",
    title: "Home Power Backup",
    icon: Zap,
    desc: "Designed to keep heavy appliances like ACs running during outages.",
    match: "Ideal for: Regions with high load shedding; 1.5-ton AC support.",
    tag: "EMERGENCY"
  },
  {
    id: "03",
    title: "Full Home Solar",
    icon: Home,
    desc: "Total energy independence with zero-grid consumption capability.",
    match: "Ideal for: Net-zero goals. Estimated 3.5 year ROI.",
    tag: "COMPLETE"
  },
  {
    id: "04",
    title: "Outdoor & Security",
    icon: ShieldCheck,
    desc: "Lighting and surveillance systems powered by ambient daylight.",
    match: "Ideal for: Remote farmhouses and high-end perimeter security.",
    tag: "UTILITY"
  }
];

export default function Categorization() {
  const [active, setActive] = useState(2); // Default to 'Full Home Solar'

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-primary tracking-tight mb-2">Intelligent Categorization</h2>
          <p className="text-[11px] text-stone-500 font-medium leading-relaxed">Select a primary objective to sync your property's energy profile.</p>
        </div>
        <span className="text-[9px] font-black text-stone-300 uppercase tracking-[0.3em] hidden md:block">Engine v2.1</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat, index) => {
          const isActive = active === index;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(index)}
              className={`text-left p-8 rounded-[1.5rem] border transition-all duration-300 flex flex-col justify-between h-[260px] ${
                isActive 
                ? "bg-primary text-white border-primary shadow-xl shadow-primary/10" 
                : "bg-stone-50/50 border-stone-100 text-primary hover:border-primary/20"
              }`}
            >
              <cat.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-primary opacity-40"}`} />
              
              <div>
                <h3 className="text-lg font-bold leading-tight mb-3">{cat.title}</h3>
                <p className={`text-[11px] leading-relaxed font-medium ${isActive ? "text-white/70" : "text-stone-500"}`}>
                  {cat.desc}
                </p>
              </div>

              <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${isActive ? "text-white/30" : "text-stone-300"}`}>
                {cat.id} / {cat.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* DYNAMIC MATCH DISPLAY WITH "BOOK NOW" ACTION */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-5 bg-stone-900 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
             </div>
             <div>
               <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-0.5">Configuration Match</p>
               <p className="text-xs text-stone-300 font-medium">
                 {categories[active].match}
               </p>
             </div>
          </div>
          
          {/* FIXED BUTTON: Now links to Contact */}
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-stone-900 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-white transition-all"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </Link>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}