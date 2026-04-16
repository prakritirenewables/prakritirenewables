import { Factory, TrendingDown, Leaf, Globe } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: Factory, value: "120+", label: "Industrial Sites", color: "bg-emerald-900 text-white" },
    { icon: TrendingDown, value: "35%", label: "Avg. OPEX Reduction", color: "bg-stone-100 text-primary" },
    { icon: Leaf, value: "14M", label: "CO2 Tons Abated", color: "bg-stone-100 text-primary" },
    { icon: Globe, value: "20+", label: "States Presence", color: "bg-primary text-white" }
  ];

  return (
    <section className="py-20 border-t border-stone-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* DATA TILES: Increased padding and value size */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-black/5 ${stat.color} shadow-sm`}>
              <stat.icon className="w-5 h-5 mb-5 opacity-30" />
              <h4 className="text-3xl font-black tracking-tighter mb-1">{stat.value}</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CONTENT: Balanced headline and quote */}
        <div className="lg:col-span-7 lg:pl-4 space-y-10">
          <div>
            <h2 className="text-4xl font-black text-primary tracking-tighter leading-[1.1] mb-6">
              Data-Driven <br/> Decarbonization.
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed max-w-lg font-medium">
              From initial feasibility to lifecycle maintenance, Prakriti Renewables ensures 
              your B2B operations are future-proofed against rising fossil fuel volatility.
            </p>
          </div>

          {/* THE QUOTE: More prominent layout */}
          <div className="p-8 bg-stone-50 rounded-[2rem] border-l-8 border-primary relative">
            <blockquote className="text-sm md:text-base text-stone-600 italic leading-relaxed mb-6 font-medium">
              "The shift to solar was a strategic financial move that stabilized our 
              10-year forecasting. Prakriti's audit was eye-opening."
            </blockquote>
            <div className="flex items-center gap-3">
               <div className="w-8 h-[1px] bg-primary/30" />
               <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                 — COO, Northern Textile Group
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}