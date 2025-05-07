import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced smooth scrolling with easing
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
          
          // Smooth scroll with a slight delay for transition effects
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Remove the class after navigation completes
            setTimeout(() => {
              document.body.classList.remove('navigating');
            }, 800);
          }, 200);
        }
      }
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
