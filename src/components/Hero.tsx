import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden mb-16 py-12 rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.9] mb-6">
            Is Your Roof Ready for the Future?
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
            Assess your home's solar potential with our precision-engineered readiness engine. Calculate ROI, subsidies, and environmental impact in real-time.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden group"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASUjhX6B5PRp5AiMBEvyZo9DAt_RhsWCCHPtsYRL8Nu05pdXuko0rc5SlWPacBK4jdZyUd_x1wCWVz-jsUDY5-YkNI8xpIJi7upaejFRdM2E-C6jerZ8yv8lh8SpG-o45ba3VnLm2iTlgsmqV-sYMddL1mxyWOJ9IXWlw11he65yQM0ub6WSbV-AoVQwYBFVOStN2W6sPxB1v-FjlIKE0nTYGO5tvLMsvskC9SCa4v-SKMO_xm6qa88KLEc7XWo2ik-X14jLZ-5HP0"
            alt="Solar panels on a roof"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
        </motion.div>
      </div>
    </header>
  );
}
