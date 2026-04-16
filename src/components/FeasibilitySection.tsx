import { useState } from "react";
import { motion } from "motion/react";
import solarDatabase from "../solarData.json";

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
    <section className="mb-20 bg-surface-container-low rounded-2xl p-8 lg:p-12 border border-outline-variant/20 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Form Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">01</div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">Feasibility Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Location (City/PIN)</label>
              <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Jammu" className="w-full bg-transparent border-b border-outline py-2 outline-none focus:border-primary transition-colors" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Avg. Monthly Bill (₹)</label>
              <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} className="w-full bg-transparent border-b border-outline py-2 outline-none focus:border-primary" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Sanctioned Load (kW)</label>
              <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} className="w-full bg-transparent border-b border-outline py-2 outline-none focus:border-primary" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Shadow-Free Area (sq ft)</label>
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-transparent border-b border-outline py-2 outline-none focus:border-primary" />
            </div>
          </div>

          <motion.button
            onClick={handleCalculate}
            disabled={isCalculating}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded font-bold shadow-lg shadow-primary/20 disabled:opacity-50"
          >
            {isCalculating ? "Consulting Satellite Data..." : "Calculate Feasibility"}
          </motion.button>
        </div>

        {/* Results Side */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Recommended System</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-primary">{results.system}</span>
                <span className="text-lg font-bold text-outline">kW</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Monthly Generation</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-primary">{results.generation}</span>
                <span className="text-lg font-bold text-outline">kWh</span>
              </div>
              <p className="text-[9px] text-primary/60 font-bold uppercase mt-2 tracking-tighter">Based on {results.cityFound} Irradiance</p>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
               <div className="flex justify-between mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Roof Utilization</p>
                  <p className="text-[10px] font-bold uppercase text-primary">{results.utilization}% Optimal</p>
               </div>
               <div className="mt-8 pt-6 border-t border-outline-variant/10">
  <p className="text-[10px] leading-relaxed text-stone-400 italic">
    *Results generated by this tool are for illustrative purposes only and are based on regional averages. 
  </p>
</div>
               <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: results.utilization + "%" }} 
                    className="h-full bg-primary" 
                  />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}