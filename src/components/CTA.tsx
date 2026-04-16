import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12">
      {/* SHRINK: max-w-4xl makes it feel like a professional component rather than a page filler.
        PADDING: Reduced from p-20 to p-12.
      */}
      <div className="max-w-4xl mx-auto bg-primary rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden shadow-xl">
        
        {/* Pulse background is now more subtle */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"
        />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">
            Ready to Join the Revolution?
          </h2>
          
          <p className="text-white/60 text-xs md:text-sm max-w-md mx-auto mb-8 leading-relaxed font-medium">
            Collaborate with our Jammu engineering team to build a 
            sustainable energy strategy for your enterprise.
          </p>
          
          <Link to="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-primary px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg flex items-center gap-2 group"
            >
              Partner with Us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}