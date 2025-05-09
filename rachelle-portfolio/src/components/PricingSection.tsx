import bgPic from '../assets/images/bg pic.jpg';
import { FaDumbbell, FaCamera, FaCheck, FaCrown, FaTimes } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section 
      id="pricing" 
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
            <div className="absolute w-40 h-1 bg-gradient-to-r from-blue-400 to-blue-300 left-1/2 -bottom-4 transform -translate-x-1/2 rounded-full"></div>
          </h2>
          <p className="text-blue-100 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Invest in your fitness journey and modeling career with our exclusive packages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fitness Package */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-300/30">
                  <span className="text-blue-300 text-3xl group-hover:text-white transition-all duration-500">
                    <FaDumbbell />
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white text-center">Fitness Training</h3>
              <div className="w-16 h-1 bg-blue-400/50 mx-auto mb-6 rounded-full"></div>
              
              <div className="text-center mb-8">
                <span className="text-blue-200 text-lg">Starting at</span>
                <p className="text-5xl font-bold text-white my-2">R300/h</p>
                <span className="text-blue-200">per session</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {/* <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Personalized training sessions</span>
                </li> */}
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Custom workout plans</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Nutrition guidance</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Assisted Stretching and Mobility</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Online Sessions(video call based)</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 border border-blue-400/30 inline-block text-center"
              >
                Book Training
              </a>
            </div>
          </div>
          
          {/* Free Trial - Featured */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02] -mt-6 md:mt-0">
            {/* Featured badge */}
            <div className="absolute top-6 right-6 z-30 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg flex items-center">
              <span className="mr-1"><FaCrown /></span> FEATURED
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-gradient-to-br from-blue-600 to-blue-900 p-10 border border-blue-400/30 rounded-3xl shadow-2xl transition-all duration-500 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <span className="text-yellow-300 text-3xl">
                    <FaCrown />
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white text-center">2-Weeks Free Trial</h3>
              <div className="w-16 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
              
              <div className="text-center mb-8">
                <span className="text-blue-200 text-lg">Value</span>
                <p className="text-5xl font-bold text-white my-2">R0</p>
                <span className="text-blue-200">No risk trial</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-3">
                    <FaTimes />
                  </span>
                  <span>Full access to online workouts</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-3">
                    <FaCheck />
                  </span>
                  <span>Four complementary sessions</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-3">
                    <FaCheck />
                  </span>
                  <span>Free consultation</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-3">
                    <FaCheck />
                  </span>
                  <span>Access to Gym facilities</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-3">
                    <FaCheck />
                  </span>
                  <span>No obligation to continue</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="w-full py-4 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-white/30 transform hover:-translate-y-1 inline-block text-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>
          
          {/* Modeling Package */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-300/30">
                  <span className="text-blue-300 text-3xl group-hover:text-white transition-all duration-500">
                    <FaCamera />
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white text-center">Modeling Services</h3>
              <div className="w-16 h-1 bg-blue-400/50 mx-auto mb-6 rounded-full"></div>
              
              <div className="text-center mb-8">
                <span className="text-blue-200 text-lg">Starting at</span>
                <p className="text-5xl font-bold text-white my-2">R600/h</p>
                <span className="text-blue-200">per hour</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Professional photo shoots</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Fashion events</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Commercial appearances</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Brand collaborations</span>
                </li>
                <li className="flex items-center text-white/90 group-hover:text-white">
                  <span className="text-blue-300 mr-3 group-hover:text-white transition-all duration-500">
                    <FaCheck />
                  </span>
                  <span>Social Media Campaigns</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 border border-blue-400/30 inline-block text-center"
              >
                Book Modeling
              </a>
            </div>
          </div>
        </div>
        
        {/* Custom packages note */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 text-lg">
            Looking for a custom package? <a href="#contact" className="text-blue-300 hover:text-blue-200 underline">Contact us</a> for personalized solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

  export default PricingSection;
