"use client";

import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="h-10 w-10 rounded-full flex items-center justify-center border border-zinc-300 bg-white hover:cursor-pointer"
    >
      {isDark ? (
        <FiSun className="text-lg text-yellow-500" />
      ) : (
        <FiMoon className="text-lg text-zinc-700" />
      )}
    </button>
  );
}