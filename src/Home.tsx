import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquareQuote, X } from "lucide-react"; 
import { Link } from "react-router-dom";
import { 
  Factory, 
  Home as HomeIcon, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Landmark, 
  Globe, 
  ExternalLink, 
  Loader2,
  Newspaper
} from "lucide-react";

// --- 1. HERO SECTION ---
const Hero = () => (
  <section className="relative px-8 pt-8 pb-16 overflow-hidden bg-stone-50 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
      
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 z-10">
        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
          30 Years of Engineering Trust
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.9] mb-6 drop-shadow-sm">
          Energy Engineering. <br />
          <span className="italic font-light text-stone-400">Redefined.</span>
        </h1>
        <p className="text-lg text-primary max-w-lg leading-relaxed mb-8 drop-shadow-sm">
          Based in Jammu, serving Pan-India. We deliver architectural-grade solar 
          infrastructure for high-demand industrial ecosystems.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/contact">
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-emerald-900/20 hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 group">
              Partner with Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="/readiness">
            <button className="w-full sm:w-auto bg-white border border-stone-200 text-primary px-8 py-4 rounded-full text-sm font-bold hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm">
              Diagnostic Audit
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-5">
        <div className="aspect-4/5 bg-stone-100 rounded-4xl overflow-hidden shadow-2xl shadow-emerald-900/10 relative">
          <img alt="Solar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg">
            <p className="text-[9px] font-bold text-primary mb-0.5 uppercase tracking-widest">Global Output</p>
            <p className="text-3xl font-black text-primary tracking-tighter">142.8 <span className="text-base">GW</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- 2. SOLUTIONS SECTION ---
const Solutions = () => (
  <section className="px-8 py-10 bg-stone-50/50">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-2xl font-bold text-primary tracking-tight">Built for Scale.</h2>
        <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest italic">Our Expertise</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Link to="/commercial" className="md:col-span-8 group">
          <div className="h-full bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
            <Factory className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-3">B2B Enterprise</h3>
            <p className="text-stone-500 text-sm max-w-sm mb-6">Infrastructure for industrial giants. From feasibility to grid integration.</p>
            <ArrowRight className="absolute bottom-10 right-10 w-6 h-6 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </div>
        </Link>
        <Link to="/residential" className="md:col-span-4 group">
          <div className="h-full bg-primary p-10 rounded-3xl text-white shadow-lg hover:scale-[1.01] transition-all">
            <HomeIcon className="w-10 h-10 mb-6 opacity-60" />
            <h3 className="text-2xl font-bold mb-3">B2C Residential</h3>
            <div className="bg-white/10 p-5 rounded-xl border border-white/5">
                <p className="text-2xl font-black">60%</p>
                <p className="text-[9px] opacity-60 font-bold uppercase tracking-widest">Avg. Monthly Savings</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

// --- 3. INDUSTRY HUB ---
const IndustryHub = () => {
  const [news, setNews] = useState([
    { title: "Global Solar Capacity Surpasses 2 Terawatts", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() },
    { title: "India Targets 500GW Renewable Capacity by 2030", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() },
    { title: "Agrivoltaics Surge in J&K: New Guidelines for Solar Farming", link: "https://jakeda.jk.gov.in/", pubDate: new Date().toISOString() },
    { title: "Residential Subsidy Budget Increased for FY 2026-27", link: "https://pmsuryaghar.gov.in/", pubDate: new Date().toISOString() },
    { title: "Perovskite Cell Efficiency Hits Record 30% in Lab Trials", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() },
    { title: "Green Hydrogen Policy Integration: Solar's Role Explained", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() }
  ]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchLiveNews = async () => {
      try {
        // Fetching directly without the broken allorigins proxy wrapper
        const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.mercomindia.com/feed");
        const data = await res.json();
        
        if (data.items && data.items.length > 0) {
          setNews(data.items.slice(0, 6)); 
          setIsLive(true);
        }
      } catch (e) { 
        console.error("Syncing paused.", e); 
      }
    };
    fetchLiveNews();
  }, []);

  return (
    <section className="py-12 px-6 bg-stone-950 text-white rounded-4xl my-8 border border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 opacity-40">
            <Landmark className="w-3.5 h-3.5" />
            <h2 className="text-[9px] font-black uppercase tracking-[0.4em]">Official Registries</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[ {n: "Surya Ghar", l: "https://pmsuryaghar.gov.in/"}, {n: "JAKEDA", l: "https://jakeda.jk.gov.in/"}, {n: "MNRE", l: "https://solarrooftop.gov.in/"} ].map(g => (
              <a key={g.n} href={g.l} target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-white/2 border border-white/5 rounded-lg hover:bg-white/5 transition-all">
                <h4 className="text-[10px] font-bold text-stone-400">{g.n}</h4>
              </a>
            ))}
          </div>

          <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-black relative group h-75">
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                Live Global Solar Tracker
              </span>
            </div>
            
            {/* THE NEW GITHUB PAGES IFRAME */}
            <iframe 
              src="https://globalenergymonitor.github.io/maps/trackers/solar/" 
              className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 relative z-10"
              title="Global Solar Tracker"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:border-l lg:border-white/5 lg:pl-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 opacity-40">
              <Newspaper className="w-3.5 h-3.5" />
              <h2 className="text-[9px] font-black uppercase tracking-[0.4em]">Latest News</h2>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-1 h-1 rounded-full ${isLive ? 'bg-emerald-500 animate-ping' : 'bg-stone-600'}`} />
              <span className="text-[8px] font-bold uppercase tracking-widest">{isLive ? 'Live Sync' : 'Static'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {news.map((item, i) => (
              <motion.a key={i} href={item.link} target="_blank" rel="noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                        className="p-4
                         bg-white/2 border
                          border-white/5 rounded-xl
                           hover:border-emerald-500/40 
                           transition-all group flex flex-col 
                           justify-between h-25">
                <h4 className="text-[11px] font-bold leading-tight mb-3 group-hover:text-emerald-400 line-clamp-2">{item.title}</h4>
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <span className="text-[8px] font-bold text-stone-500 uppercase">{new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  <ArrowRight className="w-3 h-3 text-emerald-500/40 group-hover:text-emerald-500 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { supabase } from "./supabaseClient"; // <-- Add this to your imports at the top!

// --- REVIEWS & IMPACT SECTION (SUPABASE EDITION) ---
const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(5);
  const [liveReviews, setLiveReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. FETCH APPROVED REVIEWS FROM SUPABASE ON LOAD
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (data) {
        setLiveReviews(data);
      }
      setIsLoading(false);
    };

    fetchReviews();
  }, []);

  // 2. PUSH NEW REVIEWS DIRECTLY TO SUPABASE & SEND EMAIL NOTIFICATION
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Map the form inputs to match your SQL columns exactly
    const newReview = {
      name: formData.get("name"),
      role: formData.get("role"),
      review_text: formData.get("review"),
      rating: selectedStar
    };

    // 1. Send data to Supabase
    const { error } = await supabase
      .from('reviews')
      .insert([newReview]);

    if (error) {
      alert("Submission Error: " + error.message);
    } else {
      setIsSubmitted(true); // Show the success checkmark to the user

      // 2. Silently trigger the EmailJS notification to your inbox
      emailjs.send(
        'service_0f77jss',   // Replace with your EmailJS Service ID
        'review',  // Replace with your EmailJS Template ID
        {
          name: newReview.name,
          role: newReview.role,
          rating: newReview.rating,
          message: newReview.review_text,
        },
        '_671IszmT-p1vraDA'    // Replace with your EmailJS Public Key
      ).catch((err) => console.error('Email notification failed:', err));
    }
  };

  return (
    <section className="py-10 px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquareQuote className="w-5 h-5 text-emerald-500 opacity-80" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Client Impact</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Engineered for <span className="italic font-light text-stone-400">Excellence.</span>
            </h3>
          </div>
          
          <button 
            onClick={() => { setIsModalOpen(true); setIsSubmitted(false); }}
            className="bg-stone-50 border border-stone-200 text-primary px-6 py-3 rounded-full text-xs font-bold hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-sm"
          >
            Leave a Review
          </button>
        </div>

        {/* 3. RENDER THE LIVE DATABASE REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
             <div className="col-span-3 py-10 flex justify-center">
               <Loader2 className="w-6 h-6 text-emerald-500 animate-spin" />
             </div>
          ) : liveReviews.length === 0 ? (
             <div className="col-span-3 p-10 bg-stone-50 rounded-4xl border border-stone-100 text-center">
               <p className="text-stone-500 text-sm font-medium">No reviews published yet. Be the first!</p>
             </div>
          ) : (
            liveReviews.map((review, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-4xl border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-8 font-medium">"{review.review_text}"</p>
                </div>
                <div className="border-t border-stone-200 pt-6">
                  <p className="font-bold text-primary text-sm">{review.name}</p>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* --- THE POPUP MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-stone-950/40 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white rounded-4xl p-8 md:p-10 w-full max-w-lg relative z-10 shadow-2xl border border-stone-100">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 hover:text-primary hover:bg-stone-100 transition-all">
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-black text-primary mb-2 tracking-tight">Share your experience</h3>
                  <p className="text-sm text-stone-500 mb-8 font-medium">Your feedback helps us engineer better solutions.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="flex gap-2 justify-center py-4 bg-stone-50 rounded-2xl border border-stone-100">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)} onClick={() => setSelectedStar(star)} className={`w-8 h-8 cursor-pointer transition-all ${star <= (hoveredStar || selectedStar) ? "text-emerald-500 fill-emerald-500 scale-110" : "text-stone-300"}`} />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Name</label>
                        <input required name="name" type="text" className="w-full bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Role / Project</label>
                        <input required name="role" type="text" placeholder="e.g. Residential Client" className="w-full bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Review</label>
                      <textarea required name="review" rows={4} className="w-full bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all resize-none font-medium" />
                    </div>

                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/10 hover:bg-emerald-900 transition-all mt-4">
                      Submit Review
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 fill-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-2">Thank you!</h3>
                  <p className="text-sm text-stone-500 font-medium">Your review has been submitted to our team for approval.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
// --- 4. CTA SECTION ---
const CTA = () => (
  <section className="px-8 py-10">
    <div className="max-w-5xl mx-auto bg-primary p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden shadow-xl">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Ready to transition?</h2>
        <p className="text-white/60 text-sm max-w-md mx-auto mb-10 font-medium">
            Powering Pan-India industrial growth from our Jammu headquarters. 
            Join the hundreds of enterprises already optimized.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input className="bg-white/10 border-b border-white/20 text-white text-sm placeholder:text-white/30 px-6 py-3 rounded-xl w-full sm:max-w-xs outline-none focus:border-white transition-all" placeholder="Corporate email" type="email" />
          <Link to="/contact">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-stone-50 transition-colors">
                Get Started
            </button>
          </Link>
        </div>
      </div>
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Solutions />
      <IndustryHub />
      <Testimonials />
      <CTA />
      <div className="py-8 text-center opacity-30 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500">
        Jammu • Pan-India • Engineering Excellence
      </div>
    </main>
  );
}