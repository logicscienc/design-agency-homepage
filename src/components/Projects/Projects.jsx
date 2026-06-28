 "use client";
import Image from "next/image";

import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";




const projects = [
  {
    title: "Sweetley Yours",
    category: "Full Stack MERN",
    image: "/images/projects/SweetleyYours.jpg",
    live: "https://caramel-corner.vercel.app"
  },
  {
    title: "Prism",
    category: "React.js",
    image: "/images/projects/Prism.png",
    live: "https://github.com/logicscienc/PROFILEFORGE"
  },
  {
    title: "PDF Editor",
    category: "Next.js",
    image: "/images/projects/pdfEdit.png",
    live: "https://bolo-form-smoky.vercel.app"
  },
  {
    title: "StudyNotion",
    category: "MERN Stack",
    image: "/images/projects/studyNotion.jpg",
    live: "https://studynotion-frontend-steel-sigma.vercel.app"
  },
  {
    title: "3D Portfolio",
    category: "Three.js",
    image: "/images/projects/threeD.png",
    live: "https://web-3d-product-viewer.vercel.app"
  },
];

export default function Projects(){
   


    return(
        <section
         id="portfolio"
  className="relative z-20 bg-background py-36"
>

    <div className="mx-auto max-w-7xl px-6">

        <span className="mb-8 block text-center text-sm font-medium uppercase tracking-[0.5em] text-secondary">
  PORTFOLIO
</span>

<h2
  className="mb-20 text-center text-5xl font-bold leading-tight md:text-7xl"
  style={{
    background:
      "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Selected Projects
</h2>
 <Marquee
 autoFill
  gradient={false}
  speed={45}
  pauseOnHover
  pauseOnClick
>
  <div className="flex gap-8 pr-8 overflow-x-hidden">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        {...project}
      />
    ))}
  </div>
</Marquee>

        </div>

        </section>
    )
}