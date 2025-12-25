
import React, { useState, useEffect } from 'react';
import { Menu, X, Bike } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Models', href: '#models' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-red-600 p-1.5 rounded-lg shadow-lg">
            <Bike className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-gray-900' : 'text-white md:text-white text-gray-900'}`}>HERO<span className="text-red-600">BIKES</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-red-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-500/30 hover:bg-red-700 transition-all transform hover:-translate-y-0.5"
          >
            BOOK TEST RIDE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-red-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-lg font-semibold py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-red-600 text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            BOOK TEST RIDE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
