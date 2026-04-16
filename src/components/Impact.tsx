import { motion } from "motion/react";
import { CloudOff, Droplets, Users, Award } from "lucide-react";

export default function Impact() {
  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-8 text-on-background">Environmental Impact</h2>
          <div className="space-y-6">
            <div className="bg-tertiary-container p-8 rounded-xl border border-outline-variant/10 flex justify-between items-end">
              <div>
                <p className="text-on-tertiary-container text-xs uppercase tracking-widest font-bold mb-2">Carbon Offset</p>
                <h4 className="text-4xl font-bold text-on-tertiary-container">1.2M <span className="text-lg font-normal opacity-80">Tons/Year</span></h4>
              </div>
              <CloudOff className="w-12 h-12 text-on-tertiary-container opacity-30" />
            </div>
            
            <div className="bg-surface-container p-8 rounded-xl flex justify-between items-end">
              <div>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Clean Water Saved</p>
                <h4 className="text-4xl font-bold text-on-surface">450M <span className="text-lg font-normal opacity-80">Liters</span></h4>
              </div>
              <Droplets className="w-12 h-12 text-on-surface opacity-10" />
            </div>
            
            <div className="bg-surface-container p-8 rounded-xl flex justify-between items-end">
              <div>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Jobs Created</p>
                <h4 className="text-4xl font-bold text-on-surface">15,000+</h4>
              </div>
              <Users className="w-12 h-12 text-on-surface opacity-10" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-8 text-on-background">Trust & Certifications</h2>
          <p className="text-on-surface-variant mb-12 leading-relaxed">
            Our products and operations strictly adhere to Bureau of Indian Standards (BIS) to ensure the highest quality and safety for the Indian market.
          </p>
          <div className="border-2 border-primary/20 bg-primary/5 p-12 flex flex-col items-center justify-center text-center rounded-xl transition-all hover:bg-primary/10">
            <Award className="w-16 h-16 mb-4 text-primary" />
            <p className="text-xl font-bold uppercase tracking-widest text-primary">BIS CERTIFIED</p>
            <p className="text-sm text-on-surface-variant mt-2">Bureau of Indian Standards Compliance for Quality & Safety</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
