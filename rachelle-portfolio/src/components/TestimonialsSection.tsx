import Sarah from '../assets/images/Sarahtesti.jpeg'; // Adjust the path as necessary
import Testymonial from '../assets/images/testymonial.avif'; // Adjust the path as necessary
import Amanda from '../assets/images/Aesthetic Gym Pictures.jpeg'; // Adjust the path as necessary

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">What My Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-600 italic mb-4">"TrainWithRay helped me fight excessive oil both in the gym and outside!"</p>
            <div className="flex items-center">
            <img 
              src={Sarah} 
              alt="Sarah" 
              className="rounded-xl max-w-full h-auto"
              style={{ maxWidth: '350px' }}
            />
              <span className="ml-2 font-bold">Sarah J.</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-600 italic mb-4">"After struggling with my weight loss for years, Rachelle's techniques helped me break through in no time!"</p>
            <div className="flex items-center">
            <img 
              src={Testymonial} 
              alt="Testimonial" 
              className="rounded-xl max-w-full h-auto"
              style={{ maxWidth: '200px' }}
            />
              <span className="ml-2 font-bold">Yolanda T.</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-600 italic mb-4">"The fitness program Rachelle designed for me helped me lose 20 pounds while improving my stage presence and confidence."</p>
            <div className="flex items-center">
            <img 
            src={Amanda} 
            alt="Emma.R" 
            className="rounded-xl max-w-full h-auto"
            style={{ maxWidth: '260px' }}
          />
              <span className="ml-2 font-bold">Emma R.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;