import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../../firebase.init.js";
import { signOut } from "firebase/auth";
import { logout } from "@/redux/reducers/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    dispatch(logout());
    navigate("/");
  };

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
    <nav className="bg-[#00004d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              {/* <img className="h-10" src="/assets/images/full_logo.png" alt="" /> */}
              <span className="text-secondary">gift</span>
              <span className="text-primary">mate</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-primary font-bold">
              Home
            </Link>
            <Link to="/gifts" className="hover:text-primary font-bold">
              Gifts
            </Link>
            <Link to="/chat-bot" className="hover:text-primary font-bold">
              Chatbot
            </Link>
            <Link to="/about-us" className="hover:text-primary font-bold">
              About Us
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeToggle></ThemeToggle>
            <Link
              to="/cart-items"
              className="pb-1 hidden md:inline-block hover:text-primary font-bold ml-4"
            >
              <BsCart2 />
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => logOut()}
                className="pb-1 hidden md:inline-block hover:text-primary font-bold ml-4"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/log-in"
                className="pb-1 hidden md:inline-block hover:text-primary font-bold ml-4"
              >
                Log In
              </Link>
            )}
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
                  <MdOutlineClose color="#ffbf00" size={24} />
                ) : (
                  <FiMenu color="#4635B1" size={24} />
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
            to="/gifts"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Gifts
          </Link>
          <Link
            to="/chat-bot"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Chatbot
          </Link>
          <Link
            to="/about-us"
            className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <div className="flex justify-between items-center">
            {isLoggedIn ? (
              <button
                onClick={() => logOut()}
                className="block text-white hover:bg-gray-600 rounded px-3 py-2"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/log-in"
                className="block text-white hover:bg-gray-600 rounded px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
            )}
            <Link
              to="/cart-items"
              className="block text-white hover:bg-gray-600 rounded px-3 py-2"
            >
              <BsCart2 />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
