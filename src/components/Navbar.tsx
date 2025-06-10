import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from '../components/Link';
import GatlinburgLogo from '../assets/gatlinburg-logo.png'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="hero" 
            className={`flex items-center space-x-4 text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#1F4E3D]' : 'text-white'}`}
          >
            <img 
              src={GatlinburgLogo} 
              alt="Gatlinburg logo" 
              className="w-16 h-16 object-contain"
            />
            <span>Gatlinburg</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLinks isScrolled={isScrolled} />
            <button 
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors duration-300"
            >
              <Link to="things-to-do" className={`font-medium transition-colors duration-300`}>
              Plan Your Visit
              </Link>
              
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? 
                <X size={24} color={isScrolled ? '#1F4E3D' : 'white'} /> : 
                <Menu size={24} color={isScrolled ? '#1F4E3D' : 'white'} />
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
        } bg-white`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4 shadow-inner">
          <MobileNavLinks closeMenu={() => setIsOpen(false)} />
          <button className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors duration-300">
            Plan Your Visit
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLinks: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const linkStyle = isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300';

  return (
    <>
      <Link to="things-to-do" className={`font-medium ${linkStyle} transition-colors duration-300`}>
        Things to Do
      </Link>
      <Link to="places-to-stay" className={`font-medium ${linkStyle} transition-colors duration-300`}>
        Places to Stay
      </Link>
      <Link to="dining" className={`font-medium ${linkStyle} transition-colors duration-300`}>
        Dining
      </Link>
      <Link to="events" className={`font-medium ${linkStyle} transition-colors duration-300`}>
        Events
      </Link>
      <Link to="about" className={`font-medium ${linkStyle} transition-colors duration-300`}>
        About
      </Link>
      <Link to="contact" className={`font-medium ${linkStyle} transition-colors duration-300`}>
        Contact
      </Link>
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col space-y-4">
      <Link 
        to="things-to-do" 
        className="font-medium text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Things to Do
      </Link>
      <Link 
        to="places-to-stay" 
        className="font-medium text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Places to Stay
      </Link>
      <Link 
        to="dining" 
        className="font-medium text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Dining
      </Link>
      <Link 
        to="events" 
        className="font-medium text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Events
      </Link>
      <Link 
        to="about" 
        className="font-medium text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        About
      </Link>
      <Link 
        to="contact" 
        className="font-medium text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;