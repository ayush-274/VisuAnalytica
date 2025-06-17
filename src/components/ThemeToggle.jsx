// src/components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
