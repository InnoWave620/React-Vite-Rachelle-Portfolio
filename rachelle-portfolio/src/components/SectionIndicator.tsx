import React from 'react';

interface SectionIndicatorProps {
  activeSection: string;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({ activeSection }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a class to the body to trigger transition effects
      document.body.classList.add('navigating');
      
      // Smooth scroll with a slight delay for transition effects
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Remove the class after navigation completes
        setTimeout(() => {
          document.body.classList.remove('navigating');
        }, 800);
      }, 200);
    }
  };

  return (
    <div className="section-indicator hidden lg:flex">
      {sections.map(section => (
        <div 
          key={section.id}
          className={`indicator-dot ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => handleClick(section.id)}
          title={section.label}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;





