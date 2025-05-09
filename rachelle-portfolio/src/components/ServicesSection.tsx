import { FaDumbbell, FaUsers, FaAppleAlt, FaLaptop, FaCamera, FaRss, FaBriefcase, FaFolder } from 'react-icons/fa';
import bgPic from '../assets/images/bg pic.jpg';

const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="py-32 relative"
      style={{
        backgroundImage: `url(${bgPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-black/75 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6 relative inline-block">
            Premium Services
            <div className="absolute w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-300 left-1/2 -bottom-4 transform -translate-x-1/2 rounded-full"></div>
          </h2>
          <p className="text-blue-100 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Elevating your Health Journey with my holistic client-centric approach & Elevating your brand with my professional modelling services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Fitness Training Card */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-12 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent">
              <div className="flex items-center mb-10">
                <div className="p-5 rounded-full bg-blue-500/20 text-blue-300 mr-6 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/10">
                  <FaDumbbell size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white transition-all duration-500">
                  Fitness Training
                </h3>
              </div>
              
              <ul className="space-y-6 text-blue-100/90 group-hover:text-white/90 transition-all duration-500">
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaUsers size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Personal Training</h4>
                    <p className="opacity-80 text-lg">One-on-one customized sessions tailored to your specific goals and needs</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaUsers size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Training Plans</h4>
                    <p className="opacity-80 text-lg">Elite expert training plans for all fitness levels</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaAppleAlt size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Nutrition Guidance</h4>
                    <p className="opacity-80 text-lg">Expert advice on nutrition to complement your fitness regimen</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaLaptop size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Online Sessions</h4>
                    <p className="opacity-80 text-lg">Remote based training options with the same personalized attention</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 text-center">
                <a href="#contact" className="inline-block py-4 px-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 text-lg border border-blue-400/30">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Modelling Card */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-12 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent">
              <div className="flex items-center mb-10">
                <div className="p-5 rounded-full bg-blue-500/20 text-blue-300 mr-6 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/10">
                  <FaCamera size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white transition-all duration-500">
                  Modelling
                </h3>
              </div>
              
              <ul className="space-y-6 text-blue-100/90 group-hover:text-white/90 transition-all duration-500">
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaCamera size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Photo Shoots</h4>
                    <p className="opacity-80 text-lg">Professional modeling for fitness, fashion, and commercial photography</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaRss size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Fashion Events</h4>
                    <p className="opacity-80 text-lg">Runway and showcase appearances for clothing and fitness brands</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaBriefcase size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Commercial Appearances</h4>
                    <p className="opacity-80 text-lg">Brand representation for events, advertisements, and promotions</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="p-3 rounded-full bg-blue-500/20 text-blue-300 mr-5 mt-1 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-md">
                    <FaFolder size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-white transition-all duration-500">Portfolio Development</h4>
                    <p className="opacity-80 text-lg">Guidance and services to build a professional modeling portfolio</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 text-center">
                <a href="#contact" className="inline-block py-4 px-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 text-lg border border-blue-400/30">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
