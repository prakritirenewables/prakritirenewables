import { Sun, Search, Zap, CheckCircle2 } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-16 border-t border-stone-100">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-[1px] bg-primary" />
        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Core B2B Verticals</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* LARGE CARD: Increased padding and font sizes */}
        <div className="md:col-span-8 p-10 bg-stone-50 rounded-[2rem] border border-stone-100 flex flex-col justify-between h-[340px] group hover:bg-white transition-all shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-stone-100 mb-8">
              <Sun className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Utility-Scale Solar PV</h3>
            <p className="text-sm text-stone-500 max-w-md leading-relaxed">
              Complete turnkey solutions for ground-mounted solar arrays. Our engineering 
              team specializes in large-scale PPA structures and captive power plants 
              for heavy industry.
            </p>
          </div>
          <div className="flex gap-6 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary/20 pb-1">PPA Optimized</span>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary/20 pb-1">EPC Certified</span>
          </div>
        </div>

        {/* SMALL CARD: Clearer list items */}
        <div className="md:col-span-4 p-10 bg-white rounded-[2rem] border border-stone-100 flex flex-col justify-between h-[340px] shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center border border-stone-100 mb-8">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Industrial Auditing</h3>
            <p className="text-xs text-stone-400 mb-6 font-medium">Optimization for heavy infrastructure.</p>
            <ul className="space-y-3">
              {[ "Power Factor Correction", "Harmonic Analysis", "Grid Compliance" ].map(item => (
                <li key={item} className="flex items-center gap-3 text-[11px] font-bold text-primary/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}