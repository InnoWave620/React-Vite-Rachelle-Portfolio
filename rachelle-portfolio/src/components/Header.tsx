import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import rayLogo from '../assets/images/raylogo-Photoroom.png';
import onceActiveLogo from '../assets/images/once active logo.jpg';

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

  // Toggle body class when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }, [isMenuOpen]);

  // Close menu when clicking a link
  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Add a class to the body to trigger transition effects
      document.body.classList.add('navigating');
      
      // Close menu with a slight delay for animation
      setIsMenuOpen(false);
      
      // Smooth scroll with a slight delay for transition effects
      setTimeout(() => {
        // On mobile, use a more performant scrolling method
        const yOffset = -80; // Header height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        
        // Set active section
        setActiveSection(sectionId);
        
        // Remove the class after navigation completes
        setTimeout(() => {
          document.body.classList.remove('navigating');
        }, 800);
      }, 300);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-blue-900/95 shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src={rayLogo} 
              alt="TrainWithRay Logo" 
              className="h-10 w-auto"
            />
            <span className="text-white font-signature text-2xl">TrainWithRay</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-2">
            <a 
              href="https://www.onceactivegym.co.za/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 group hover:opacity-90 transition-all duration-300"
              aria-label="Visit Once Active Gym website"
            >
              <img 
                src={onceActiveLogo} 
                alt="Once Active Always Active" 
                className="h-8 w-auto rounded-full border border-blue-300/30 group-hover:border-blue-300/60 transition-all duration-300 shadow-sm group-hover:shadow-blue-400/30"
              />
              {/* <span className="text-blue-200 font-signature text-sm group-hover:text-blue-100 transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-blue-300/60 after:transition-all after:duration-300 group-hover:after:w-full">
                "Once Active Always Active"
              </span> */}
            </a>
          </div>
        </div>
        
        {/* Mobile menu button with enhanced animation */}
        <button 
          className="md:hidden text-white focus:outline-none relative z-50 w-12 h-12 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180 scale-110' : ''}`}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
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
      
      {/* Enhanced mobile navigation overlay */}
      <div className={`fixed inset-0 bg-gradient-to-br from-blue-900/95 to-black/95 z-40 flex flex-col items-center justify-center mobile-nav-overlay ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Subtle background pattern for luxury feel */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.2" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")' 
        }}></div>
        
        <nav className="flex flex-col items-center space-y-8 text-xl">
          <a 
            href="#" 
            onClick={() => handleLinkClick('home')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'home' ? 'active text-blue-300 font-semibold' : ''
            }`}
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={() => handleLinkClick('services')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'services' ? 'active text-blue-300 font-semibold' : ''
            }`}
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={() => handleLinkClick('about')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'about' ? 'active text-blue-300 font-semibold' : ''
            }`}
          >
            About
          </a>
          <a 
            href="#gallery" 
            onClick={() => handleLinkClick('gallery')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'gallery' ? 'active text-blue-300 font-semibold' : ''
            }`}
          >
            Gallery
          </a>
          <a 
            href="#pricing" 
            onClick={() => handleLinkClick('pricing')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'pricing' ? 'active text-blue-300 font-semibold' : ''
            }`}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            onClick={() => handleLinkClick('testimonials')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'testimonials' ? 'active text-blue-300 font-semibold' : ''
            }`}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={() => handleLinkClick('contact')} 
            className={`mobile-nav-item text-white hover:text-blue-300 transition-colors ${
              activeSection === 'contact' ? 'active text-blue-300 font-semibold' : ''
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
