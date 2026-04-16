// --- 3. INDUSTRY HUB (COMMAND CENTER EDITION) ---
const IndustryHub = () => {
  const [news, setNews] = useState([
    { title: "Global Solar Capacity Surpasses 2 Terawatts", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() },
    { title: "India Targets 500GW Renewable Capacity by 2030", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() },
    { title: "Residential Subsidy Budget Increased for FY 2026-27", link: "https://pmsuryaghar.gov.in/", pubDate: new Date().toISOString() },
    { title: "New Efficiency Records Set in Perovskite Cell Tech", link: "https://www.mercomindia.com/", pubDate: new Date().toISOString() }
  ]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchLiveNews = async () => {
      try {
        const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.rss2json.com/v1/api.json?rss_url=https://www.mercomindia.com/feed"));
        const json = await res.json();
        const data = JSON.parse(json.contents);
        if (data.items && data.items.length > 0) {
          setNews(data.items.slice(0, 4)); // Now explicitly grabbing 4 items
          setIsLive(true);
        }
      } catch (e) { console.error("Syncing paused."); }
    };
    fetchLiveNews();
  }, []);

  return (
    <section className="py-12 px-6 bg-stone-950 text-white rounded-[2rem] my-8 border border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT COLUMN: REGISTRIES & GLOBAL TRACKER */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 opacity-40">
            <Landmark className="w-3.5 h-3.5" />
            <h2 className="text-[9px] font-black uppercase tracking-[0.4em]">Official Registries</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[ 
              {n: "Surya Ghar", l: "https://pmsuryaghar.gov.in/"}, 
              {n: "JAKEDA", l: "https://jakeda.jk.gov.in/"}, 
              {n: "MNRE", l: "https://solarrooftop.gov.in/"} 
            ].map(g => (
              <a key={g.n} href={g.l} target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.05] transition-all">
                <h4 className="text-[10px] font-bold text-stone-400 group-hover:text-emerald-400">{g.n}</h4>
              </a>
            ))}
          </div>

          {/* GLOBAL ENERGY MONITOR EMBED */}
          <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-black relative group">
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                Live Global Solar Tracker
              </span>
            </div>
            
            <iframe 
              src="https://globalenergymonitor.org/projects/global-solar-power-tracker/tracker-map/" 
              className="w-full h-[300px] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              title="Global Solar Tracker"
              loading="lazy"
            />
            
            <div className="absolute bottom-3 right-3 z-20">
               <a 
                 href="https://globalenergymonitor.org/projects/global-solar-power-tracker/" 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-[8px] font-bold uppercase p-2 bg-white/10 hover:bg-emerald-500 hover:text-white rounded backdrop-blur-md transition-all"
               >
                 View Full Analytics
               </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LATEST NEWS (4 ITEMS) */}
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
              <motion.a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noreferrer" 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
              >
                <h4 className="text-[12px] font-bold leading-tight mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">{item.title}</h4>
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <span className="text-[8px] font-bold text-stone-500 uppercase">{new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  <ArrowRight className="w-3 h-3 text-emerald-500/40 group-hover:text-emerald-500 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>

          <p className="mt-6 text-[8px] text-stone-600 italic text-center">
            Intelligence sourced via Mercom India & Global Energy Monitor (GEM)
          </p>
        </div>
      </div>
    </section>
  );
};