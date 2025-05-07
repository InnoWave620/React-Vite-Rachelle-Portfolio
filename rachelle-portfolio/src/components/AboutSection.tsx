import trainerProfile from '../assets/images/rayaboutme.jpg';
import sportBg from '../assets/images/sport.jpg'; // Updated to use sport.jpg instead of bg pic.jpg
import { FaDumbbell, FaSwimmingPool, FaRunning, FaCertificate, FaHeart, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-32 relative"
      style={{
        backgroundImage: `url(${sportBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/70 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-white text-center">
          <span className="relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></span>
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative group transform transition-all duration-500 hover:scale-[1.02]">
              <img 
                src={trainerProfile} 
                alt="Rachelle Hamalainen" 
                className="rounded-3xl h-auto shadow-2xl border-2 border-white/10 z-10 relative"
                style={{ maxWidth: '550px' }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-blue-400/30 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-blue-400/30 rounded-3xl -z-10"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <p className="text-2xl font-semibold text-white text-center font-signature">
                <span className="backdrop-blur-md bg-blue-900/40 px-8 py-4 rounded-full border border-blue-300/20 shadow-lg inline-block">
                  "once active always active"
                </span>
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-white">What Makes Me Unique?</h3>
            
            <div className="space-y-6">
              <p className="text-blue-50/90 text-lg leading-relaxed">
                I'm Rachelle, a dedicated personal trainer and fitness model passionate about holistic wellness. With my background in competitive swimming and modern dance, I bring diverse movement expertise to my training approach.
              </p>
              
              <p className="text-blue-50/90 text-lg leading-relaxed">
                Certified as a Level 3 Personal Trainer in England, I've helped diverse clients achieve their fitness goals. My personal journey with body image challenges fuels my commitment to helping others build confidence and strength.
              </p>
              
              <p className="text-blue-50/90 text-lg leading-relaxed">
                Training at Once Active Gym in Sandton, I focus on correcting imbalances, improving mobility, and building foundational strength. I specialize in creating empowering spaces where clients feel supported in their fitness journey.
              </p>
              
              <p className="text-blue-50/90 text-lg leading-relaxed">
                Whether you're recovering from injury or enhancing performance, I offer personalized guidance to help you achieve your unique fitness goals.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-4 rounded-xl flex items-center shadow-lg border border-blue-300/20 backdrop-blur-sm hover:from-blue-400/30 hover:to-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-300 text-2xl mr-3">
                  <FaDumbbell />
                </span>
                <span className="font-medium text-white">Strength Training</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-4 rounded-xl flex items-center shadow-lg border border-blue-300/20 backdrop-blur-sm hover:from-blue-400/30 hover:to-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-300 text-2xl mr-3">
                  <FaSwimmingPool />
                </span>
                <span className="font-medium text-white">Swimming</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-4 rounded-xl flex items-center shadow-lg border border-blue-300/20 backdrop-blur-sm hover:from-blue-400/30 hover:to-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-300 text-2xl mr-3">
                  <FaRunning />
                </span>
                <span className="font-medium text-white">Cardio Conditioning</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-4 rounded-xl flex items-center shadow-lg border border-blue-300/20 backdrop-blur-sm hover:from-blue-400/30 hover:to-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-300 text-2xl mr-3">
                  <FaCertificate />
                </span>
                <span className="font-medium text-white">Certified Trainer</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-4 rounded-xl flex items-center shadow-lg border border-blue-300/20 backdrop-blur-sm hover:from-blue-400/30 hover:to-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-300 text-2xl mr-3">
                  <FaHeart />
                </span>
                <span className="font-medium text-white">Mental Wellness</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-4 rounded-xl flex items-center shadow-lg border border-blue-300/20 backdrop-blur-sm hover:from-blue-400/30 hover:to-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-300 text-2xl mr-3">
                  <FaUsers />
                </span>
                <span className="font-medium text-white">Client Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
