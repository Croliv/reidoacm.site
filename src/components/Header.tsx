import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
            <span className="text-orange-500">REI do ACM</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
              <a 
              href="https://instagram.com/rei_do_acm" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="px-4 py-3 text-black hover:bg-orange-500 hover:text-white transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="px-4 py-3 text-black hover:bg-orange-500 hover:text-white transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="px-4 py-3 text-black hover:bg-orange-500 hover:text-white transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-4 py-3 text-black hover:bg-orange-500 hover:text-white transition-colors text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-4 py-3 text-black hover:bg-orange-500 hover:text-white transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;