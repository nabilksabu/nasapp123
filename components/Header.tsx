
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { RocketIcon } from './icons';
import type { NavLink } from '../types';

declare const motion: any;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0c0a1a]/80 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <RocketIcon className="w-8 h-8 text-cyan-400" />
          <a href="#" className="text-2xl font-bold font-orbitron text-white">
            Cosmic Canvas
          </a>
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link: NavLink) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
          Connect
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
