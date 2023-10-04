"use client";

import Image from "next/image";
// components/DarkModeToggle.js
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek apakah mode gelap sudah diaktifkan sebelumnya
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);

    // Terapkan mode gelap atau terang berdasarkan nilai yang disimpan di localStorage
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Fungsi untuk mengganti mode gelap atau terang
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    // Terapkan mode gelap atau terang ke seluruh aplikasi
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button
        className="bg-yellow-400 dark:bg-gray-800 text-white dark:text-gray-300 p-2 rounded-full border-2 border-white dark:border-gray-400 overflow-hidden"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <Image src="dark.svg" width={21} height={21} />
        ) : (
          <Image src="sun2.svg" width={21} height={21} />
        )}
      </button>
    </>
  );
}
