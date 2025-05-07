import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced smooth scrolling with better mobile support
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Add a class to the body to trigger transition effects
          document.body.classList.add('navigating');
          
          // Get the header height for offset
          const headerHeight = 80; // Adjust based on your header height
          
          // Calculate position with offset
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          // Use requestAnimationFrame for smoother animation
          requestAnimationFrame(() => {
            // Smooth scroll with optimized performance
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Remove the class after navigation completes
            setTimeout(() => {
              document.body.classList.remove('navigating');
            }, 800);
          });
        }
      }
    });
  }
  
  // Add touch event listeners for better mobile responsiveness
  document.addEventListener('touchstart', () => {
    // This empty handler enables :active CSS states on mobile
  }, {passive: true});
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
