import { motion } from "motion/react";

export default function FinancialSection() {
  const metrics = [
    { label: "Estimated Gross Cost", value: "₹3,45,000", bg: "bg-tertiary-container", text: "text-on-tertiary-container" },
    { label: "PM-Surya Ghar Subsidy", value: "- ₹78,000", bg: "bg-primary-container", text: "text-on-primary-container" },
    { label: "Payback Period", value: "4.2 Years", bg: "bg-surface-container-high", text: "text-primary" },
    { label: "25-Year Savings", value: "₹22.4L+", bg: "bg-surface-container-high", text: "text-primary" },
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
          02
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Financial Projections & ROI
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${metric.bg} ${metric.text} p-8 rounded-2xl flex flex-col justify-between min-h-[160px]`}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
              {metric.label}
            </p>
            <p className={`text-3xl font-black mt-4 ${metric.text.includes('primary') && !metric.bg.includes('surface') ? '' : metric.text}`}>
              {metric.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
