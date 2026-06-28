"use client";

import { motion } from "framer-motion";
import {useEffect, useState} from "react";

export default function Hero() {

   const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="hero"
      className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-cover bg-center"
       style={{
        backgroundImage: isDark
          ? "url('/images/bg/unsplash02.jpg')"
          : "url('/images/bg/unsplash01.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold leading-none md:text-7xl"
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="block text-center"
            >
              We Craft
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-2 block text-center"
            >
              Digital Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-300"
          >
            Helping brands build beautiful websites that inspire,
            engage, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 flex justify-center"
          >
            <button
             onClick={() =>
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" })
  }
            
            className="rounded-full border border-white/70 bg-white/10 px-8 py-3 text-white backdrop-blur-md transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-black">
              View Work
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}