import trainerProfile from '../assets/images/rayaboutme.jpg';
import { FaDumbbell, FaSwimmingPool, FaRunning, FaCertificate, FaHeart, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-blue-800 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 justify-center p-2 relative">
            <img 
              src={trainerProfile} 
              alt="Trainer" 
              className="rounded-xl h-auto"
              style={{ maxWidth: '650px' }}
            />
            <p className="mt-4 text-xl font-semibold text-blue-800 text-center font-signature">
              "once active always active"
            </p>
          </div>
          <div className="md:w-1/2 p-8 rounded-xl backdrop-blur-lg border border-blue-200/100">
            <h3 className="text-3xl font-bold mb-6 text-blue-800">What Makes Me Unique?</h3>
            <p className="text-gray-600 mb-4 text-lg">
              I'm Rachelle, a dedicated personal trainer and fitness model passionate about holistic wellness. With my background in competitive swimming and modern dance, I bring diverse movement expertise to my training approach.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Certified as a Level 3 Personal Trainer in England, I've helped diverse clients achieve their fitness goals. My personal journey with body image challenges fuels my commitment to helping others build confidence and strength.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Training at Once Active Gym in Sandton, I focus on correcting imbalances, improving mobility, and building foundational strength. I specialize in creating empowering spaces where clients feel supported in their fitness journey.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Whether you're recovering from injury or enhancing performance, I offer personalized guidance to help you achieve your unique fitness goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                <span className="text-blue-600 text-2xl mr-2">
                  <FaDumbbell />
                </span>
                <span>Strength Training</span>
              </div>
              <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                <span className="text-blue-600 text-2xl mr-2">
                  <FaSwimmingPool />
                </span>
                <span>Swimming</span>
              </div>
              <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                <span className="text-blue-600 text-2xl mr-2">
                  <FaRunning />
                </span>
                <span>Cardio Conditioning</span>
              </div>
              <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                <span className="text-blue-600 text-2xl mr-2">
                  <FaCertificate />
                </span>
                <span>Certified Trainer</span>
              </div>
              <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                <span className="text-blue-600 text-2xl mr-2">
                  <FaHeart />
                </span>
                <span>Mental Wellness</span>
              </div>
              <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                <span className="text-blue-600 text-2xl mr-2">
                  <FaUsers />
                </span>
                <span>Client Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;