import { motion } from "motion/react";
import { Trees, Cloud, Car } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    { icon: Trees, value: "124", label: "Trees Planted Equiv." },
    { icon: Cloud, value: "4.8T", label: "CO2 Mitigated/Year" },
    { icon: Car, value: "28k", label: "EV KM Powered" },
  ];

  return (
    <section className="mb-20 py-16 bg-on-surface rounded-[2.5rem] text-white relative overflow-hidden">
      {/* Wave Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0 50 Q 25 30 50 50 T 100 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
          <path
            d="M0 60 Q 25 40 50 60 T 100 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-on-surface font-bold">
            04
          </div>
          <h2 className="text-2xl font-bold tracking-tight uppercase tracking-widest">
            Environmental Impact
          </h2>
        </div>
        <p className="max-w-2xl mx-auto text-on-surface-variant mb-12">
          Your transition to solar isn't just a financial decision; it's a legacy of preservation for the planet.
        </p>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full border border-emerald-500/30 flex items-center justify-center mb-4 group hover:bg-emerald-500 transition-all duration-300">
                <stat.icon className="w-10 h-10 text-emerald-500 group-hover:text-on-surface transition-colors" />
              </div>
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-500 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
