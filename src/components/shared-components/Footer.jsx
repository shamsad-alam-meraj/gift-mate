import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3d3d3d] text-gray-200 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            <span className="text-secondary">gift</span>
            <span className="text-primary">mate</span>
          </h3>
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
              <a href="#about" className="hover:text-secondary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-secondary transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-secondary transition">
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
              className="p-2 rounded-full bg-gray-700 hover:bg-secondary transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-secondary transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-secondary transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-secondary transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <h4 className="text-lg font-semibold">Newsletter</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-secondary text-gray-800 font-bold rounded-md hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
