import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  <section className="relative px-8 pt-32 pb-16 overflow-hidden bg-stone-50 min-h-screen flex items-center">
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
        <div className="aspect-[4/5] bg-stone-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 relative">
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
  <section className="px-8 py-20 bg-stone-50/50">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-2xl font-bold text-primary tracking-tight">Built for Scale.</h2>
        <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest italic">Our Expertise</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Link to="/commercial" className="md:col-span-8 group">
          <div className="h-full bg-white p-10 rounded-[1.5rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
            <Factory className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-3">B2B Enterprise</h3>
            <p className="text-stone-500 text-sm max-w-sm mb-6">Infrastructure for industrial giants. From feasibility to grid integration.</p>
            <ArrowRight className="absolute bottom-10 right-10 w-6 h-6 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </div>
        </Link>
        <Link to="/residential" className="md:col-span-4 group">
          <div className="h-full bg-primary p-10 rounded-[1.5rem] text-white shadow-lg hover:scale-[1.01] transition-all">
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
        const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://www.mercomindia.com/feed"));
        const json = await res.json();
        const data = JSON.parse(json.contents);
        if (data.items && data.items.length > 0) {
          setNews(data.items.slice(0, 6)); 
          setIsLive(true);
        }
      } catch (e) { console.error("Syncing paused."); }
    };
    fetchLiveNews();
  }, []);

  return (
    <section className="py-12 px-6 bg-stone-950 text-white rounded-[2rem] my-8 border border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 opacity-40">
            <Landmark className="w-3.5 h-3.5" />
            <h2 className="text-[9px] font-black uppercase tracking-[0.4em]">Official Registries</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[ {n: "Surya Ghar", l: "https://pmsuryaghar.gov.in/"}, {n: "JAKEDA", l: "https://jakeda.jk.gov.in/"}, {n: "MNRE", l: "https://solarrooftop.gov.in/"} ].map(g => (
              <a key={g.n} href={g.l} target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.05] transition-all">
                <h4 className="text-[10px] font-bold text-stone-400">{g.n}</h4>
              </a>
            ))}
          </div>

          <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-black relative group h-[300px]">
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                Live Global Solar Tracker
              </span>
            </div>
            <iframe 
              src="https://globalenergymonitor.org/projects/global-solar-power-tracker/tracker-map/" 
              className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
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
              <motion.a key={i} href={item.link} target="_blank" rel="noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-emerald-500/40 transition-all group flex flex-col justify-between h-[100px]">
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

// --- 4. CTA SECTION ---
const CTA = () => (
  <section className="px-8 py-20">
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
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Solutions />
      <IndustryHub />
      <CTA />
      <div className="py-10 text-center opacity-30 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500">
        Jammu • Pan-India • Engineering Excellence
      </div>
    </main>
  );
}