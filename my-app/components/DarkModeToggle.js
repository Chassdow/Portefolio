import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(prefersDark);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  if (darkMode === null) return null;

  const iconSize = 24;

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md w-10 h-10 flex items-center justify-center" // On retire top-4 et right-4
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" size={iconSize} />
      ) : (
        <FaMoon className="text-gray-900" size={iconSize} />
      )}
    </button>
  );
}


