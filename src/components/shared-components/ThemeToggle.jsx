import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/ThemeContext";
import { gsap } from "gsap";
import { FiSun, FiMoon } from "react-icons/fi"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleRef = useRef(null);

  useEffect(() => {
    // GSAP animation to smoothly move the toggle circle
    gsap.to(toggleRef.current, {
      x: theme === "dark" ? 24 : 2, // Adjust position for the dark/light mode
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      className={`pl-[2px] flex items-center justify-between w-12 h-6 rounded-full cursor-pointer ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      {/* Toggle Circle with Icon */}
      <div
        ref={toggleRef}
        className="w-4 h-4 flex items-center justify-center bg-white rounded-full shadow-md"
      >
        {theme === "dark" ? (
          <FiMoon className="text-gray-700 text-lg" /> // Moon icon for dark mode
        ) : (
          <FiSun className="text-yellow-500 text-lg" /> // Sun icon for light mode
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
