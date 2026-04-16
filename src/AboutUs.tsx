import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Values from "./components/Values";
import Impact from "./components/Impact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import logo from "./assets/logo.png"; 

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 px-8 max-w-6xl mx-auto w-full">
        {/* CENTERED ABOUT HERO */}
<section className="mb-16 border-b border-stone-100 pb-16 text-center">
  
  {/* THE HERO LOGO: BUMPED TO w-28 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="w-28 h-auto mx-auto mb-10" // Increased width and bottom margin
  >
    <img 
      src={logo} 
      alt="Prakriti Logo" 
      className="w-full h-full object-contain filter drop-shadow-sm" 
    />
  </motion.div>

  <motion.span 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block"
  >
    Institutional Profile
  </motion.span>
  
  <motion.h1 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-[0.9] mb-8"
  >
    Engineering for <br />
    <span className="italic font-light text-stone-400">a Greener India.</span>
  </motion.h1>
  
  <motion.p 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="text-stone-500 text-base max-w-xl leading-relaxed mx-auto"
  >
    Headquartered in Jammu, Prakriti Renewables bridges the gap between 
    engineering excellence and sustainable necessity through a 30-year 
    legacy of trust and precision infrastructure.
  </motion.p>
</section>
        <Values />
        <Impact />
        <CTA />
      </main>
    </div>
  );
}