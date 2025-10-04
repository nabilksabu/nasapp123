
import React from 'react';
import { GithubIcon, TwitterIcon, RocketIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-[#110e24] border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center items-center gap-3 mb-6">
            <RocketIcon className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold font-orbitron text-white">
                Cosmic Canvas
            </span>
        </div>
        <p className="max-w-xl mx-auto mb-6">
          A conceptual project for the NASA International Space Apps Challenge. Designed to inspire and showcase the potential of space data visualization and exploration.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cosmic Canvas. Built for educational and demonstrative purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
