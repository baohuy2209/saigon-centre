import React, { useState, useCallback } from 'react';
import { Building2, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Building2 className="h-8 w-8 text-blue-800" />
            <span className="text-xl font-bold text-gray-900">Saigon Centre</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium">
              Amenities
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium">
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-medium">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-colors duration-200 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-colors duration-200 font-medium">
                Amenities
              </button>
              <button onClick={() => scrollToSection('location')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-colors duration-200 font-medium">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="mx-4 mt-2 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-medium text-center">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;