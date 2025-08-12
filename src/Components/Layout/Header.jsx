import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import logo from "../../assets/images/LOGO.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries", isDropdown: true },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

const industries = [
  { name: "Food And Beverages", path: "/industries" },
  { name: "Information And Technology", path: "/industries" },
  { name: "Banking", path: "/industries" },
  { name: "General Insurance", path: "/industries" },
  { name: "Life Insurance", path: "/industries" },
  { name: "Real Estate", path: "/industries" },
];

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicking outside (Desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isMobileView && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileView]);

  // Desktop dropdown hover
  const handleDropdownMouseEnter = () => {
    if (!isMobileView) setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (!isMobileView) setIsDropdownOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 ${scrolled ? 'bg-[#042433] shadow-2xl border-b border-gray-200/50' : 'bg-transparent shadow-lg border-b border-gray-200/50'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-20 lg:h-24' : 'h-24 lg:h-28'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-full opacity-0 transition-all duration-500 blur-sm"></div>
              <img
                src={logo}
                alt="Aakash Group Logo"
                className={`relative w-auto transition-all duration-500 filter drop-shadow-lg ${scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-24'}`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between space-x-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <a
                      href={link.path}
                      className={`relative ${scrolled ? 'text-white' : 'text-black'} hover:text-blue-600 px-6 py-3 text-lg font-semibold flex items-center transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group overflow-hidden`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <ChevronDown className={`ml-2 h-5 w-5 transition-all duration-500 ${isDropdownOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
                    </a>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 py-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100 mb-2">
                          Our Industries
                        </div>
                        {industries.map((industry, index) => (
                          <a
                            key={index}
                            href={industry.path}
                            className="flex items-center px-6 py-4 text-base text-gray-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/80 hover:text-blue-600 transition-all duration-300 group relative overflow-hidden"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                            <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{industry.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className={`relative ${scrolled ? 'text-white' : 'text-black'} hover:text-blue-600 px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group overflow-hidden`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
                  </a>
                );
              }
            })}
          </div>

          {/* Desktop Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-gradient-to-r from-green-600 via-emerald-700 to-teal-600 text-white px-6 py-3 rounded-full transition-all duration-500 shadow-2xl transform hover:scale-105 group">
                <Mail className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                <a href="mailto:info@aakash.group" className="text-sm font-bold tracking-wide">Email Us</a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white px-6 py-3 rounded-full transition-all duration-500 shadow-2xl transform hover:scale-105 group">
                <Phone className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                <a href="tel:01-4430196" className="text-sm font-bold tracking-wide">01-4430196</a>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            <a href="mailto:info@aakash.group" className={`flex items-center ${scrolled ? 'text-white' : 'text-green-600'} hover:text-green-400 p-2 rounded-full hover:bg-green-50/10 transition-all duration-300 transform hover:scale-110`}>
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:01-4430196" className={`flex items-center ${scrolled ? 'text-white' : 'text-blue-600'} hover:text-blue-400 p-2 rounded-full hover:bg-blue-50/10 transition-all duration-300 transform hover:scale-110`}>
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${scrolled ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} focus:outline-none transition-all duration-300 p-3 rounded-xl hover:bg-blue-50/10 transform hover:scale-110`}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden border-t ${scrolled ? 'border-gray-600/50 bg-[#042433]/98' : 'border-gray-200/50 bg-white/98'} backdrop-blur-xl`}>
            <div className="px-4 pt-6 pb-6 space-y-3">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="space-y-3">
                      <div className="flex">
                        <Link
                          to={link.path}
                          className={`${scrolled ? 'text-white' : 'text-gray-800'} flex-1 px-6 py-4 rounded-l-2xl text-xl font-semibold transition-all duration-300`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`px-4 py-4 rounded-r-2xl transition-all duration-300 border-l ${scrolled ? 'border-gray-600/50 text-white' : 'border-gray-200/50 text-gray-800'}`}
                        >
                          <ChevronDown className={`h-6 w-6 transition-all duration-500 ${isDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
                        </button>
                      </div>
                      {isDropdownOpen && (
                        <div className="ml-6 space-y-2 animate-in slide-in-from-left duration-300">
                          {industries.map((industry, index) => (
                            <Link
                              key={index}
                              to={industry.path}
                              className={`flex items-center ${scrolled ? 'text-gray-300' : 'text-gray-700'} px-6 py-3 rounded-xl text-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsDropdownOpen(false);
                              }}
                            >
                              <div className="text-xl mr-4">{industry.icon}</div>
                              <span className="font-medium">{industry.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${scrolled ? 'text-white' : 'text-gray-800'} block px-6 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:translate-x-2 hover:scale-105`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;