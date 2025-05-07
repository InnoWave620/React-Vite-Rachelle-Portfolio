import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';
import bgPic from '../assets/images/bg pic.jpg';

const ContactInfo = () => {
  return (
    <section 
      id="contact" 
      className="py-24 relative"
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
        <div className="text-center mb-16">
          <span className="inline-block text-blue-300 text-lg font-medium mb-2">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Get In Touch
            <div className="absolute w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 left-1/2 -bottom-2 transform -translate-x-1/2 rounded-full"></div>
          </h2>
          <p className="text-blue-200 text-lg mt-6 max-w-2xl mx-auto">
            Ready to transform your fitness journey? Reach out to schedule a consultation or book your first session.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact Details</h3>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 shadow-md">
                      <FaPhone size={18} color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800">Phone</h4>
                      <p className="text-blue-700">+27 60 548 6585</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 shadow-md">
                      <FaEnvelope size={18} color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800">Email</h4>
                      <p className="text-blue-700">rachelle@onceactive.co.za</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 shadow-md">
                      <FaMapMarkerAlt size={18} color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800">Address</h4>
                      <p className="text-blue-700">Once Active Gym, 84 6th St, Parkmore, Sandton, 2196</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 shadow-md">
                      <FaClock size={18} color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800">Hours</h4>
                      <p className="text-blue-700">Monday-Friday: 9 AM to 6 PM</p>
                    </div>
                  </div>
                </div>
                
                {/* Map and Directions */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Location</h3>
                  
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-64 bg-blue-50">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0753981788!2d28.035213875394825!3d-26.098780283493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573c818104e5b%3A0x2a059b96b2fa348b!2s84%206th%20St%2C%20Parkmore%2C%20Sandton%2C%202196!5e0!3m2!1sen!2sza!4v1682345678901!5m2!1sen!2sza" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  <a 
                    href="https://www.google.com/maps/dir//84+6th+St,+Parkmore,+Sandton,+2196/@-26.1127038,27.9734927,15.12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e9573c818104e5b:0x2a059b96b2fa348b!2m2!1d28.0374026!2d-26.0987802?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    className="inline-flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                  >
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <FaDirections size={16} />
                    </div>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to start your fitness journey?</h3>
                  <p className="text-blue-100">Book your first session today and transform your life.</p>
                </div>
                <a 
                  href="mailto:rachelle@onceactive.co.za?subject=Booking%20Request" 
                  className="inline-flex items-center justify-center py-4 px-8 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-blue-900/30 transform hover:-translate-y-1"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-blue-700/70 mb-4">Trusted by clients across Sandton and Johannesburg</p>
            <div className="flex justify-center space-x-8">
              <div className="w-16 h-16 bg-white/50 rounded-full"></div>
              <div className="w-16 h-16 bg-white/50 rounded-full"></div>
              <div className="w-16 h-16 bg-white/50 rounded-full"></div>
              <div className="w-16 h-16 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

  export default ContactInfo;
