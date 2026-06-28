"use client";
import {useState} from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-transparent transition-all duration-300">
      
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Image
          src="/images/logos/A.png"
          alt="A Studio Logo"
          width={65}
          height={65}
          priority
           className="h-14 w-14 object-contain lg:h-16 lg:w-16"
        />
        
       {/* Right Section */}
        <div className="flex items-center gap-5 lg:gap-8">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#hero"   className="text-foreground text-sm font-medium transition hover:opacity-70">
              Hero
            </a>

            

            <a href="#services"   className="text-foreground text-sm font-medium transition hover:opacity-70">
              Services
            </a>

            <a href="#portfolio"   className="text-foreground text-sm font-medium transition hover:opacity-70">
              Portfolio
            </a>

            <a href="#contact"  className="text-foreground text-sm font-medium transition hover:opacity-70">
              Contact
            </a>

          </nav>

          <ThemeToggle />

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className="flex items-center justify-center text-2xl text-white md:hidden">
    {isMenuOpen ? <FiX /> : <FiMenu />}
  </button>
        </div>
      </div>

      {isMenuOpen && (
  <div className="fixed inset-0 top-20 bg-navbar flex flex-col items-center justify-center gap-8 md:hidden">
    <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Hero</a>
    
    <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Services</a>
    <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Portfolio</a>
    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Contact</a>
    
  </div>
)}
    </header>
  );
}  
