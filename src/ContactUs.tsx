import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, User, ArrowRight, MessageSquare, CheckCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./assets/logo.png"; 

// Helper to format data for Netlify
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Utility-Scale B2B",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This sends the data to Netlify's background bot
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => setIsSubmitted(true))
    .catch(error => alert("Submission Error: " + error));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary/10">
      <Navbar />
      
      <main className="flex-grow pt-24 px-8 max-w-6xl mx-auto w-full">
        
        {/* HERO SECTION WITH LARGE LOGO */}
        <section className="mb-12 border-b border-stone-100 pb-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.4em] text-[8px] uppercase mb-4 block"
            >
              Connect with our Vision
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-[0.95] mb-6"
            >
              Let's Power <br />
              <span className="italic font-light text-stone-400">The Future.</span>
            </motion.h1>
            
            <motion.p className="text-stone-500 text-sm max-w-md leading-relaxed font-medium">
              Headquartered in Jammu, serving Pan-India with sustainable energy 
              infrastructure. Reach out to discuss your transition to renewable power.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}x
            animate={{ opacity: 1, scale: 1 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 p-6 bg-stone-50 rounded-[3.5rem] border border-stone-100 flex items-center justify-center shadow-inner relative group">
    <img 
                  src={logo} 
                  alt="Prakriti Logo" 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* LEFT: THE FORM (NETLIFY ENABLED) */}
          <div className="lg:col-span-7 bg-stone-50/50 p-8 rounded-[2rem] border border-stone-100 relative overflow-hidden min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex-grow"
                >
                  <div className="flex items-center gap-2 mb-8">
                     <MessageSquare className="w-4 h-4 text-primary opacity-40" />
                     <h2 className="text-xl font-bold text-primary tracking-tight">Direct Inquiry</h2>
                  </div>
                  
                 <form 
  onSubmit={handleSubmit} 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  className="space-y-6"
>
  {/* 1. THE HIDDEN INPUT (MANDATORY) */}
  <input type="hidden" name="form-name" value="contact" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-1.5">
      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Full Name</label>
      <input 
        required 
        name="name" // Matches Ghost Form
        type="text" 
        onChange={handleChange}
        placeholder="e.g. Jane Doe" 
        className="w-full bg-white border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" 
      />
    </div>
    <div className="space-y-1.5">
      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Email Address</label>
      <input 
        required 
        name="email" // Matches Ghost Form
        type="email" 
        onChange={handleChange}
        placeholder="jane@example.com" 
        className="w-full bg-white border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" 
      />
    </div>
  </div>
  
  <div className="space-y-1.5">
    <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Service Interest</label>
    <select 
      name="interest" // Matches Ghost Form
      onChange={handleChange}
      className="w-full bg-white border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium appearance-none"
    >
      <option value="Utility-Scale">Utility-Scale</option>
      <option value="Residential">Residential</option>
    </select>
  </div>

  <div className="space-y-1.5">
    <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Project Details</label>
    <textarea 
      required
      name="message" // Matches Ghost Form
      onChange={handleChange}
      rows={4} 
      placeholder="Describe your energy requirements..." 
      className="w-full bg-white border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all resize-none font-medium" 
    />
  </div>

  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/10 hover:bg-emerald-900 transition-all flex items-center justify-center gap-2">
    Submit <ArrowRight className="w-3 h-3" />
  </button>
</form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20">
                    <CheckCircle className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Inquiry Sent</h3>
                  <p className="text-stone-500 text-xs max-w-xs leading-relaxed font-medium">
                    Our team will review your enquiry and contact you within 24 hours. Please feel free to reach out to our leadership.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-8 text-[9px] font-black uppercase tracking-widest text-primary border-b border-primary/20 hover:border-primary transition-all"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: LEADERSHIP & CONTACT INFO */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-8 tracking-tight">Contact Leadership</h3>
                 
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                          <User className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Director</p>
                          <p className="text-sm font-bold">Mr. Amardeep Singh</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                          <Phone className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Direct Line</p>
                          <p className="text-sm font-bold">+91 9419797658</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                          <MapPin className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Headquarters</p>
                          <p className="text-sm font-bold">Jammu, J&K, India</p>
                       </div>
                    </div>
                 </div>
               </div>
               <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="p-7 bg-stone-50 border border-stone-100 rounded-2xl flex items-center gap-4 group hover:bg-white transition-all">
               <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary transition-all">
                  <Mail className="w-4 h-4 text-primary group-hover:text-white transition-all" />
               </div>
               <div>
                  <p className="text-[8px] font-black text-stone-300 uppercase tracking-widest mb-0.5">Leadership Email</p>
                  <p className="text-xs font-bold text-primary">ads.raina@prakritirenewables.co.in</p>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
