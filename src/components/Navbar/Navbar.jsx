import React, { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { smoothScrollTo } from '../../utils/smoothScroll';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    smoothScrollTo(section, 700);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className="
        fixed 
        top-4 left-4 right-4 
        z-50 
        bg-blue-900/30 
        backdrop-blur-md 
        rounded-xl
        border border-blue-600/40
        p-4
      "
      style={{ margin: "8px" }}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-white cursor-pointer" onClick={() => handleNavClick('home')} tabIndex={0} aria-label="Go to Home">
          <Rocket className="w-7 h-7 text-blue-400" />
          <span>Sudhir.dev</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" onClick={e => {e.preventDefault(); handleNavClick('home');}} className="text-white text-lg font-bold transition hover:text-blue-300" aria-label="Home">Home</a>
          <a href="#about" onClick={e => {e.preventDefault(); handleNavClick('about');}} className="text-white text-lg font-bold transition hover:text-blue-300" aria-label="About">About</a>
          <a href="#skills" onClick={e => {e.preventDefault(); handleNavClick('skills');}} className="text-white text-lg font-bold transition hover:text-blue-300" aria-label="Skills">Skills</a>
          <a href="#projects" onClick={e => {e.preventDefault(); handleNavClick('projects');}} className="text-white text-lg font-bold transition hover:text-blue-300" aria-label="Projects">Projects</a>
          <a href="#certificates" onClick={e => {e.preventDefault(); handleNavClick('certificates');}} className="text-white text-lg font-bold transition hover:text-blue-300" aria-label="Certificates">Certificates</a>
          <a href="#contact" onClick={e => {e.preventDefault(); handleNavClick('contact');}} className="text-white text-lg font-bold transition hover:text-blue-300" aria-label="Contact">Contact</a>
          
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500/30 px-6 py-4 space-y-4 rounded-b-xl">
          <a href="#home" onClick={e => {e.preventDefault(); handleNavClick('home');}} className="block text-white hover:text-blue-300" aria-label="Home">Home</a>
          <a href="#about" onClick={e => {e.preventDefault(); handleNavClick('about');}} className="block text-white hover:text-blue-300" aria-label="About">About</a>
          <a href="#skills" onClick={e => {e.preventDefault(); handleNavClick('skills');}} className="block text-white hover:text-blue-300" aria-label="Skills">Skills</a>
          <a href="#projects" onClick={e => {e.preventDefault(); handleNavClick('projects');}} className="block text-white hover:text-blue-300" aria-label="Projects">Projects</a>
          <a href="#certificates" onClick={e => {e.preventDefault(); handleNavClick('certificates');}} className="block text-white hover:text-blue-300" aria-label="Certificates">Certificates</a>
          <a href="#contact" onClick={e => {e.preventDefault(); handleNavClick('contact');}} className="block text-white hover:text-blue-300" aria-label="Contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
