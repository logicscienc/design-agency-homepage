"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-surface border border-border p-10 min-h-[420px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="mb-8 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="mb-5 text-2xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="leading-8 text-secondary">
        {description}
      </p>
    </motion.div>
  );
}