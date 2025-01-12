import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Gift Mate</h3>
          <p className="text-sm text-gray-400">
            Thoughtful Gifts for Every Celebration. We make gifting easy and
            meaningful.
          </p>
          <p className="text-sm text-gray-400">
            © 2025 Gift Mate. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-yellow-400 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <h4 className="text-lg font-semibold">Newsletter</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-gray-800 font-bold rounded-md hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
