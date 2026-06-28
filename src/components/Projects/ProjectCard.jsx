"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  image,
  title,
  category,
  live,
}) {
  const projectLink = live || github;

  return (
    <motion.a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="group block w-[420px] flex-shrink-0 cursor-pointer"
    >
      <div className="relative h-[280px] overflow-hidden rounded-3xl">

        <Image
          src={image}
          alt={title}
          fill
          className="object-contain bg-black transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/60"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 transition-all duration-500 group-hover:translate-y-0">

          <span className="text-sm uppercase tracking-[0.3em] text-gray-300">
            {category}
          </span>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
              View Project ↗
            </span>
          </div>

        </div>

      </div>
    </motion.a>
  );
}