import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import rayLogo from '../assets/images/raylogo-Photoroom.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event to change header appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-blue-900/95 shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img 
            src={rayLogo} 
            alt="TrainWithRay Logo" 
            className="h-10 w-auto"
          />
          <span className="text-white font-signature text-2xl">TrainWithRay</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <a 
            href="#" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'home' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'services' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </a>
          <a 
            href="#about" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'about' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a 
            href="#gallery" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'gallery' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('gallery')}
          >
            Gallery
          </a>
          <a 
            href="#pricing" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'pricing' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('pricing')}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'testimonials' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('testimonials')}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className={`text-white hover:text-blue-300 transition-colors relative ${
              activeSection === 'contact' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300' : ''
            }`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </nav>
      </div>
      
      {/* Mobile navigation overlay */}
      <div className={`fixed inset-0 bg-blue-900/95 z-40 flex flex-col items-center justify-center transition-all duration-500 backdrop-blur-md ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col items-center space-y-6 text-xl">
          <a 
            href="#" 
            onClick={() => handleLinkClick('home')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'home' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={() => handleLinkClick('services')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'services' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={() => handleLinkClick('about')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'about' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            About
          </a>
          <a 
            href="#gallery" 
            onClick={() => handleLinkClick('gallery')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'gallery' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            Gallery
          </a>
          <a 
            href="#pricing" 
            onClick={() => handleLinkClick('pricing')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'pricing' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            onClick={() => handleLinkClick('testimonials')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'testimonials' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={() => handleLinkClick('contact')} 
            className={`text-white hover:text-blue-300 transition-colors ${
              activeSection === 'contact' ? 'text-blue-300 font-semibold' : ''
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
