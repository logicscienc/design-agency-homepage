import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
   <>
         <main>
  <Navbar />
  <Hero />
  <Services />
  <Projects />
  <Contact />
</main>
   </>
  );
}
