import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Sun } from "lucide-react";
import solarDatabase from "../solardata.json"; // Keep your existing import

export default function FeasibilitySection() {
  const [location, setLocation] = useState("");
  const [bill, setBill] = useState("5500");
  const [load, setLoad] = useState("5");
  const [area, setArea] = useState("800");
  const [isCalculating, setIsCalculating] = useState(false);

  const [results, setResults] = useState({
    system: "5.2",
    generation: "620",
    utilization: 65,
    cityFound: "Pune"
  });

  const handleCalculate = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const numBill = parseFloat(bill) || 0;
      const numArea = parseFloat(area) || 0;
      const input = location.toLowerCase().trim();

      const foundCity = solarDatabase.cities.find(c => 
        input.includes(c.name.toLowerCase()) || 
        (input.length >= 3 && c.pinPrefix === input.substring(0, 3))
      );

      const irradiance = foundCity ? foundCity.irradiance : solarDatabase.defaults.irradiance;
      const cityName = foundCity ? foundCity.name : "Regional Average";

      const unitPrice = 8; 
      const performanceRatio = 0.75; 
      
      let systemSize = (numBill / unitPrice) / (irradiance * 30 * performanceRatio);
      
      const maxPossible = numArea / 100;
      if (systemSize > maxPossible) systemSize = maxPossible;

      const monthlyGen = Math.round(systemSize * irradiance * 30 * performanceRatio);
      const utilization = Math.min(Math.round((systemSize * 100 / numArea) * 100), 100);

      const finalSystemSize = systemSize.toFixed(1);

      setResults({
        system: finalSystemSize,
        generation: monthlyGen.toString(),
        utilization: utilization,
        cityFound: cityName
      });

      // Save to memory for Contact Page
      localStorage.setItem('prakriti_proposed_system', finalSystemSize);
      localStorage.setItem('prakriti_proposed_city', cityName);

      setIsCalculating(false);
    }, 800); 
  };

  return (
    <section className="mb-20">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* --- LEFT SIDE: THE FORM --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 bg-emerald-500/10 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">Feasibility Engine</span>
            </div>
            <h3 className="text-3xl font-black text-primary tracking-tight mb-2">Technical Feasibility</h3>
            <p className="text-stone-500 text-sm font-medium">Enter your property details to generate a preliminary engineering model based on local irradiance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Location (City/PIN)</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Jammu" className="w-full bg-stone-50 border border-stone-100 pl-11 pr-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Avg. Monthly Bill (₹)</label>
              <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} className="w-full bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Sanctioned Load (kW)</label>
              <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} className="w-full bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest ml-1">Shadow-Free Area (sq ft)</label>
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-primary transition-all font-medium" />
            </div>
          </div>

          <motion.button
            onClick={handleCalculate}
            disabled={isCalculating}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/10 hover:bg-emerald-900 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
          >
            {isCalculating ? "Consulting Satellite Data..." : "Calculate Feasibility"}
          </motion.button>
        </div>

        {/* --- RIGHT SIDE: THE RESULTS --- */}
        <div className="w-full lg:w-1/2 bg-primary rounded-4xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center min-h-100">
          <div className="relative z-10 space-y-8 w-full">
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-2">Recommended System</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tighter">{results.system}</span>
                  <span className="text-lg font-bold text-white/70">kW</span>
                </div>
              </div>
              
              <div>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-2">Est. Generation</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tighter">{results.generation}</span>
                  <span className="text-lg font-bold text-white/70">kWh</span>
                </div>
                <p className="text-[8px] text-white/40 font-bold uppercase mt-2 tracking-widest flex items-center gap-1">
                  <Sun className="w-3 h-3" /> Based on {results.cityFound}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex justify-between mb-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Roof Utilization</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">{results.utilization}% Optimal</p>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${results.utilization}%` }} 
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-emerald-400" 
                />
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[9px] leading-relaxed text-white/30 italic font-medium">
                *Results generated by this tool are for illustrative purposes only and are based on regional averages. 
              </p>
            </div>

          </div>
          
          {/* Background design flair */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}