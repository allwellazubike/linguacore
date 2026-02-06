import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on the home page for anchor links
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Capabilities", href: "/features" },
    { name: "Architecture", href: "/infrastructure" },
    { name: "Developers", href: "/developers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#FAFAF9]/90 backdrop-blur-md border-stone-200 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:opacity-80 transition-opacity">
            LinguaCore.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wider hover:underline underline-offset-4 decoration-1"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wider hover:underline underline-offset-4 decoration-1"
              >
                {link.name}
              </a>
            ),
          )}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium text-stone-900 hover:opacity-70 transition-opacity"
          >
            Log In
          </a>
          <a
            href="#"
            className="px-6 py-2.5 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors rounded-sm"
          >
            Start Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-900 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAFAF9] border-b border-stone-200 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 shadow-xl">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-serif font-medium text-stone-900 hover:text-stone-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-serif font-medium text-stone-900 hover:text-stone-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ),
          )}
          <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-stone-100">
            <a href="#" className="text-stone-900 font-medium">
              Log In
            </a>
            <a
              href="#"
              className="text-center px-6 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors rounded-sm"
            >
              Start for Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
