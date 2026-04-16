import { motion } from "framer-motion";
import { Zap, Droplets, Sun, Wind } from "lucide-react";

export default function Excellence() {
  const specs = [
    { icon: Sun, label: "CLIMATE RATING", value: "Indian Tier-1 (50°C+)" },
    { icon: Droplets, label: "HARD WATER", value: "Corrosion Resistant" },
    { icon: Wind, label: "WIND LOAD", value: "High-Velocity Rated" },
    { icon: Zap, label: "OUTPUT SYNC", value: "Real-time Grid Matching" }
  ];

  return (
    <section className="py-20 border-t border-stone-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: SINGLE IMAGE & BUILD QUALITY CARD */}
        <div className="space-y-6">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-3xl w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 border border-stone-100 shadow-xl" 
              alt="Close-up Precision Installation"
            />
            <div className="absolute top-4 right-4">
               <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-primary shadow-sm">
                  Ref: PR-RES-2026
               </span>
            </div>
          </div>
          
          <div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 max-w-sm">
             <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-3">Build Quality</p>
             <p className="text-[12px] text-stone-500 italic leading-relaxed">
               "Architectural additions designed to look as good as they perform. 
               Zero industrial clutter."
             </p>
          </div>
        </div>

        {/* RIGHT: PRECISION TEXT & SPECS */}
        <div className="lg:pl-8">
          <span className="text-primary font-bold tracking-[0.3em] text-[9px] uppercase mb-4 block">Precision Installation</span>
          <h2 className="text-4xl font-black text-primary tracking-tighter leading-none mb-6">
            In-Situ <br />
            <span className="italic font-light text-stone-400">Excellence.</span>
          </h2>
          
          <p className="text-stone-500 text-sm leading-relaxed mb-10 max-w-md">
            Our units are engineered for the specific volatility of the Indian 
            subcontinent—handling monsoons, heatwaves, and hard water with 
            unrivaled resilience.
          </p>

          <div className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-stone-100 pt-10">
            {specs.map((spec) => (
              <div key={spec.label} className="group">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <spec.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{spec.label}</p>
                </div>
                <p className="text-xs font-medium text-stone-400 pl-10">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}