import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Animate menu open
      gsap.to(menuRef.current, {
        height: "auto", // Expand to full height
        opacity: 1, // Make it fully visible
        duration: 0.5,
        ease: "power1.inOut",
        display: "block", // Ensure it's visible
      });
    } else {
      // Animate menu close
      gsap.to(menuRef.current, {
        height: 0, // Collapse to zero height
        opacity: 0, // Fade out
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none"; // Hide completely after animation
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <nav className="border border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              {/* <img className="h-10" src="/assets/images/full_logo.png" alt="" /> */}
              <span className="text-yellow-400">gift</span>
            <span className="text-primary">mate</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-primary font-bold">
              Home
            </Link>
            <Link to="/products" className="hover:text-primary font-bold">
              Products
            </Link>
            <Link to="/services" className="hover:text-primary font-bold">
              Services
            </Link>
            <Link to="/about-us" className="hover:text-primary font-bold">
              About Us
            </Link>
          </div>
          <div>
            <ThemeToggle></ThemeToggle>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden bg-gray-700 overflow-hidden"
        style={{
          height: 0,
          opacity: 0,
          display: "none",
        }}
      >
        <div className="space-y-1 px-4 pt-2 pb-3">
          <Link
            to="/"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/services"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about-us"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
