import fitnessVideo from '../assets/videos/ray gym.mp4';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src={fitnessVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
          <span className="backdrop-blur-sm bg-white/10 px-6 py-3 rounded-lg border border-white/20">
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
