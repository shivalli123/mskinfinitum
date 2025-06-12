import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Square, Circle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Full Stack", path: "/full-stack-services" },
    { name: "Careers", path: "/hire-with-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-2 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                <div className="relative w-7 h-7">
                  <Square className="absolute inset-0 w-7 h-7 text-white/90 rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
                  <Circle className="absolute inset-0 w-7 h-7 text-white/80 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent transition-all duration-300 group-hover:from-slate-600 group-hover:to-slate-800">
                MSK Infinitum
              </span>
              <span className="text-xs font-mono text-slate-500 -mt-1 tracking-wider transition-colors duration-300 group-hover:text-slate-400">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-lg"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/contact"
                className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 shimmer-effect"></div>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
          } overflow-hidden`}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 p-4 mt-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                    location.pathname === item.path
                      ? "text-primary-600 bg-gradient-to-r from-primary-50 to-purple-50"
                      : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 text-white font-semibold rounded-xl text-center hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
