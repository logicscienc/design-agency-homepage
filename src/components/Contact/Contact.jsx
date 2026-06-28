"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 bg-background py-28"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-[35%] right-0 h-px bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500"></div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-[35%] h-px bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="mb-6 block text-sm font-medium uppercase tracking-[0.5em] text-secondary">
            CONTACT
          </span>

          <h2
            className="text-5xl font-bold leading-tight md:text-6xl"
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Build
            <br />
            Something Amazing.
          </h2>

          <p className="mt-8 max-w-xl text-secondary leading-8">
            Have an idea or project in mind? I'd love to hear about it.
            Fill out the form and let's create something beautiful together.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <Image
            src="/images/bg/girl.png"
            alt="Girl Illustration"
            width={520}
            height={520}
            priority
            className="animate-pulse object-contain"
          />

        </motion.div>

      </div>
    </section>
  );
}