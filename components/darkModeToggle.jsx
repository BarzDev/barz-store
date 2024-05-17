"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button
        className="bg-yellow-400 dark:bg-gray-800 text-white dark:text-gray-300 sm:p-2 p-1 rounded-full border-2 border-white dark:border-gray-400 overflow-hidden"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <Image src="/dark2.png" width={21} height={21} />
        ) : (
          <Image src="sun2.svg" width={21} height={21} />
        )}
      </button>
    </>
  );
}
