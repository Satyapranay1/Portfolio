import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 shadow-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Brand */}
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide animate-text">
          Satya Pranay
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-wide transition-colors duration-300 hover:text-blue-500"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 px-6 py-6 space-y-6 shadow-2xl backdrop-blur-lg rounded-b-3xl animate-slideDown">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition transform hover:translate-x-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease forwards;
        }
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text {
          background-size: 200% 200%;
          animation: textGradient 5s ease infinite;
        }
      `}</style>
    </nav>
  );
}
