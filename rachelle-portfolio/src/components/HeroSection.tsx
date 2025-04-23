import fitnessVideo from '../assets/videos/fitness-singing.mp4';


const HeroSection = () => {
  return (
    <section className="relative bg-blue-100 py-24 overflow-hidden">
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
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative container mx-auto text-center px-8">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
          Transform Your Body & Health
        </h1>
        <p className="text-lg lg:text-xl text-white mb-10 max-w-3xl mx-auto">
          Professional fitness training and Modelling with a passionate artistic mind and athletic.
        </p>
        <p className="text-xl lg:text-2xl text-white mb-8 font-signature">
          {'"once active always active"'}
        </p>
        <a href="#contact" className="bg-white text-blue-800 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
          Book Your Session
        </a>
      </div>
    </section>
  );
};

export default HeroSection;