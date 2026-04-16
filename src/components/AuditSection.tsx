import { motion } from "motion/react";
import { Building2, Compass, Sun, Zap } from "lucide-react";

export default function AuditSection() {
  const items = [
    {
      icon: Building2,
      title: "Structural Integrity",
      desc: "Verification of RC slab load-bearing capacity for panel support structures.",
    },
    {
      icon: Compass,
      title: "Orientation",
      desc: "Ideal South-facing pitch analysis for maximum year-round irradiance.",
    },
    {
      icon: Sun,
      title: "Shading Analysis",
      desc: "Identifying obstructions from nearby buildings, water tanks, or parapets.",
    },
    {
      icon: Zap,
      title: "Electrical Readiness",
      desc: "Current-load assessment and earthing pit location feasibility.",
    },
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
          03
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Site Audit Checklist
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-surface-container p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-all group"
          >
            <item.icon className="text-primary mb-4 w-8 h-8" />
            <h4 className="font-bold mb-2 text-on-surface">{item.title}</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}