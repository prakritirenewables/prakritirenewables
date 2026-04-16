import { Leaf, Zap, ShieldCheck } from "lucide-react";

export default function Values() {
  const pillars = [
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "We design ecosystems, not just panels. Every decision is measured by long-term ecological impact."
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Continuous research into smart-grid intelligence ensures the most efficient energy ROI."
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "Transparency is our bedrock. From supply chain ethics to project reporting, we hold the highest standards."
    }
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
        {pillars.map((pillar, i) => (
          <div 
            key={pillar.title} 
            className={`p-8 bg-stone-50/30 group hover:bg-white transition-colors border-stone-100 ${
              i !== pillars.length - 1 ? 'md:border-r' : ''
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <pillar.icon className="w-4 h-4 text-primary group-hover:text-white" />
            </div>
            
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">
              {pillar.title}
            </h3>
            
            <p className="text-xs text-stone-500 leading-relaxed font-medium">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
      
      {/* Subtle Blueprint Footer */}
      <div className="mt-4 flex justify-between px-4">
         <div className="flex gap-4">
            <span className="text-[8px] font-bold text-stone-300 uppercase tracking-widest">Jammu Operations</span>
         </div>
         <div className="w-32 h-[1px] bg-stone-100 self-center" />
      </div>
    </section>
  );
}