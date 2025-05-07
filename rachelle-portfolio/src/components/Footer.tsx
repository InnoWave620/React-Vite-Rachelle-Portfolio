import { FaInstagram, FaFacebook, FaYoutube, FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.2" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")' 
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-2">
              TrainWithRay Fitness
            </h3>
            <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto md:mx-0 mb-3"></div>
            <p className="text-blue-200 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
          
          {/* Social media links */}
          <IconContext.Provider value={{ className: "transition-transform duration-300 group-hover:scale-110" }}>
            <div className="flex space-x-5 mb-8 md:mb-0">
              <a 
                href="https://www.instagram.com/rachelle_hamalainen/" 
                className="group bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://web.facebook.com/people/Rachelle-Katja-Hamalainen/100089293890428/" 
                className="group bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@Goldenguitargirll" 
                className="group bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </IconContext.Provider>
          
          {/* Developer credit */}
          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm flex flex-col md:flex-row items-center justify-center md:justify-end">
              <span className="mb-1 md:mb-0 md:mr-2">Crafted with</span>
              <span className="inline-flex items-center">
                <IconContext.Provider value={{ className: "text-red-400 mx-1 animate-pulse" }}>
                  <FaHeart size={14} />
                </IconContext.Provider>
                <span>by Innowave620</span>
              </span>
            </p>
          </div>
        </div>
        
        {/* Optional: Quick links */}
        <div className="mt-10 pt-8 border-t border-blue-700/50">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Home</a>
              <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300">Services</a>
              <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-300">About</a>
              <a href="#gallery" className="text-blue-200 hover:text-white transition-colors duration-300">Gallery</a>
              <a href="#pricing" className="text-blue-200 hover:text-white transition-colors duration-300">Pricing</a>
              <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-300">Contact</a>
            </div>
            <p className="text-blue-300/70 text-xs">
              Privacy Policy • Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
