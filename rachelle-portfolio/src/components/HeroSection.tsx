import { useEffect, useRef } from 'react';
import fitnessVideo from '../assets/videos/ray gym.mp4';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video playback on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to attempt playing the video
    const attemptPlay = () => {
      video.play().catch(error => {
        console.log("Video play failed:", error);
        // For iOS, we need user interaction, so we'll add a play button
        // that appears if autoplay fails
        document.body.classList.add('video-autoplay-failed');
      });
    };

    // Try to play immediately
    attemptPlay();

    // Also try to play on user interaction with the page
    const playOnInteraction = () => {
      attemptPlay();
      // Remove event listeners after first interaction
      document.removeEventListener('touchstart', playOnInteraction);
      document.removeEventListener('click', playOnInteraction);
    };

    document.addEventListener('touchstart', playOnInteraction);
    document.addEventListener('click', playOnInteraction);

    // Clean up event listeners
    return () => {
      document.removeEventListener('touchstart', playOnInteraction);
      document.removeEventListener('click', playOnInteraction);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={fitnessVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback play button for mobile devices where autoplay fails */}
        <button 
          className="hidden video-play-button absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center z-10"
          onClick={() => videoRef.current?.play()}
          aria-label="Play video"
        >
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      <div className="relative container mx-auto text-center px-8 flex flex-col items-center justify-center h-full pt-16">
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
          Transform Your <span className="text-blue-300">Body</span> & <span className="text-blue-300">Health</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Professional fitness training and Modelling with a passionate artistic mind and athletic.
        </p>
        <p className="text-xl lg:text-2xl text-white mb-12 font-signature">
          <span className="text-blue-300 italic tracking-wide shadow-text">
            "once active always active"
          </span>
        </p>
        <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
          Book Your Session
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
