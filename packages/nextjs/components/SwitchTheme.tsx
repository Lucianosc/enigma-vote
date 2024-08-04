"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-30 rounded-xl"></div>
      <div className={`flex space-x-2 h-8 items-center justify-center text-sm relative z-10 p-1 ${className}`}>
        <input
          id="theme-toggle"
          type="checkbox"
          className="toggle toggle-primary bg-primary hover:bg-primary border-primary"
          onChange={handleToggle}
          checked={isDarkMode}
        />
        <label htmlFor="theme-toggle" className={`swap swap-rotate ${!isDarkMode ? "swap-active" : ""}`}>
          <SunIcon className="swap-on h-5 w-5" />
          <MoonIcon className="swap-off h-5 w-5" />
        </label>
      </div>
    </div>
  );
};
