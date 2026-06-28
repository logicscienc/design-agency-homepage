
import ServiceCard from "./ServiceCard";

import { Palette, Code2, PenTool } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-20 min-h-screen bg-background py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <span className="mb-8 block text-center text-sm font-medium uppercase tracking-[0.5em] text-secondary">
          SERVICES
        </span>

        <h2 
         className="mb-24 text-center text-4xl font-bold leading-tight md:text-6xl"
          style={{
            background:
              "linear-gradient(90deg, #38bdf8, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We build everything you need
          <br />
          for a modern web application.
        </h2>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            icon={<Palette
            style={{ color: "#38bdf8" }}
            />}
            title= "UI/UX Design"
           description=
      "Creating intuitive, user-focused interfaces that deliver seamless digital experiences across every device."
          />

          <ServiceCard
            icon={<Code2
             style={{ color: "#a855f7" }}
            />}
            title= "Web Development"
    description=
      "Building fast, scalable, and responsive websites with modern technologies for businesses of all sizes."
          />

          <ServiceCard
            icon={<PenTool
             style={{ color: "#d946ef" }}
            />}
            title= "Brand Identity"
    description=
      "Designing memorable visual identities that communicate your brand's personality and leave a lasting impression."
          />

        </div>

      </div>
    </section>
  );
}