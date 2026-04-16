import { motion } from "motion/react";
// 1. Add the Link import right here
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="text-center mb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-6"
      >
        Ready to Begin Your Energy Transition?
      </motion.h2>
      <p className="text-on-surface-variant mb-10 max-w-lg mx-auto">
        Book a comprehensive on-site digital audit with our engineering team to finalize your system design.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        {/* 2. Wrap the motion.button inside the Link */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-primary text-on-primary font-bold rounded-lg shadow-xl shadow-primary/20 transition-all"
          >
            Request a Site Survey
          </motion.button>
        </Link>

      </div>
    </section>
  );
}