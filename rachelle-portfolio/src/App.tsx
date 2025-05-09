import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import FullGalleryPage from './components/FullGalleryPage';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header
      
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

  return (
    <Router basename="/React-Vite-Rachelle-Portfolio">
      <div className="bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <ServicesSection />
              <AboutSection />
              <GallerySection />
              <PricingSection />
              <TestimonialsSection />
              <ContactForm />
              <Footer />
            </>
          } />
          <Route path="/gallery" element={<FullGalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
