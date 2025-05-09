import Sarah from '../assets/images/Sarahtesti.jpeg';
import Testymonial from '../assets/images/testymonial.avif';
import Amanda from '../assets/images/Aesthetic Gym Pictures.jpeg';
import bgPic from '../assets/images/bg pic.jpg'; // Import background image
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'; // Import icons

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
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
            Client Testimonials
            <div className="absolute w-40 h-1 bg-gradient-to-r from-blue-400 to-blue-300 left-1/2 -bottom-4 transform -translate-x-1/2 rounded-full"></div>
          </h2>
          <p className="text-blue-100 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Discover how my personalized approach has transformed lives and bodies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent h-full flex flex-col">
              <div className="text-blue-300 mb-6 group-hover:text-white transition-all duration-500">
                <FaQuoteLeft size={36} />
              </div>
              
              <p className="text-white/90 italic text-lg mb-8 flex-grow group-hover:text-white transition-all duration-500">
                "TrainWithRay helped me fight excessive oil both in the gym and outside! The personalized program transformed not just my body but my entire approach to fitness."
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-300/30 shadow-lg mr-4">
                    <img 
                      src={Sarah} 
                      alt="Sarah" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">Sarah J.</h4>
                    <p className="text-blue-200 text-sm">Fitness Client • 8 months</p>
                  </div>
                </div>
                
                <div className="text-blue-300 group-hover:text-white transition-all duration-500">
                  <FaQuoteRight size={24} />
                </div>
              </div>
              
              <div className="flex mt-6 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent h-full flex flex-col">
              <div className="text-blue-300 mb-6 group-hover:text-white transition-all duration-500">
                <FaQuoteLeft size={36} />
              </div>
              
              <p className="text-white/90 italic text-lg mb-8 flex-grow group-hover:text-white transition-all duration-500">
              "Rachelle is an amazing trainer who truly cares. In just three months, she’s helped me get stronger, more confident, and master proper technique. Her personalized, patient approach makes workouts effective and enjoyable. Highly recommend for beginners or anyone wanting a solid foundation!🌸"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-300/30 shadow-lg mr-4">
                    <img 
                      src={Testymonial} 
                      alt="Testimonial" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">Tahlita Van Wyk.</h4>
                    <p className="text-blue-200 text-sm">Weight Loss Client • 3 months</p>
                  </div>
                </div>
                
                <div className="text-blue-300 group-hover:text-white transition-all duration-500">
                  <FaQuoteRight size={24} />
                </div>
              </div>
              
              <div className="flex mt-6 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="relative z-20 bg-white/10 backdrop-blur-md p-10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-transparent h-full flex flex-col">
              <div className="text-blue-300 mb-6 group-hover:text-white transition-all duration-500">
                <FaQuoteLeft size={36} />
              </div>
              
              <p className="text-white/90 italic text-lg mb-8 flex-grow group-hover:text-white transition-all duration-500">
                "The fitness program Rachelle designed for me helped me lose 20 pounds while improving my stage presence and confidence. Her modeling expertise was invaluable."
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-300/30 shadow-lg mr-4">
                    <img 
                      src={Amanda} 
                      alt="Emma R." 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">Emma R.</h4>
                    <p className="text-blue-200 text-sm">Model Client • 12 months</p>
                  </div>
                </div>
                
                <div className="text-blue-300 group-hover:text-white transition-all duration-500">
                  <FaQuoteRight size={24} />
                </div>
              </div>
              
              <div className="flex mt-6 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
