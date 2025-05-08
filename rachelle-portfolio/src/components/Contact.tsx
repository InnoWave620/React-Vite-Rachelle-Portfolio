import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaDirections, FaInstagram, FaFacebook } from 'react-icons/fa';
import bgPic from '../assets/images/bg pic.jpg';
import { IconContext } from "react-icons";

const ContactInfo = () => {
  return (
    <section 
      id="contact" 
      className="py-32 relative"
      style={{
        backgroundImage: `url(${bgPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced luxury gradient overlay with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-black/80 backdrop-blur-[3px]"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.2" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-blue-300 text-lg font-medium mb-2 tracking-wider">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Contact Us
            <div className="absolute w-40 h-1 bg-gradient-to-r from-blue-400 to-blue-600 left-1/2 -bottom-2 transform -translate-x-1/2 rounded-full shadow-lg shadow-blue-500/30"></div>
          </h2>
          <p className="text-blue-200 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your fitness journey? Reach out to schedule a consultation or book your first session.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Enhanced luxury contact card with glass morphism */}
          <div className="bg-gradient-to-br from-white/10 to-blue-900/20 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <IconContext.Provider value={{ className: "group-hover:scale-110 transition-transform duration-300" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left column - Contact details */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
                    Contact Information
                    <div className="absolute w-20 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 -bottom-2 left-0 rounded-full shadow-sm shadow-blue-400/30"></div>
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-5 group">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                        <FaPhone />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-blue-200 hover:text-blue-100 transition-colors duration-300">+27 82 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5 group">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-blue-200 hover:text-blue-100 transition-colors duration-300">rachelle@onceactive.co.za </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5 group">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                        <p className="text-blue-200 hover:text-blue-100 transition-colors duration-300">84 6th Street, Parkmore, Sandton</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5 group">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                        <FaClock />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Hours</h4>
                        <p className="text-blue-200 hover:text-blue-100 transition-colors duration-300">
                          Mon-Fri: 6am - 5pm(can be rearranged)<br />
                          Sat: 7am - 5pm<br />
                          Sun: 8am - 2pm
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/rachelle_hamalainen/" 
                        className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="Instagram"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a 
                        href="https://web.facebook.com/people/Rachelle-Katja-Hamalainen/100089293890428/" 
                        className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="Facebook"
                      >
                        <FaFacebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Right column - Map */}
                <div className="h-full">
                  <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
                    Find Us
                    <div className="absolute w-20 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 -bottom-2 left-0 rounded-full shadow-sm shadow-blue-400/30"></div>
                  </h3>
                  
                  {/* Map container with iframe and enhanced styling */}
                  <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-xl border border-white/10 relative group">
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0394368244!2d28.035213876167826!3d-26.098784183486647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573c818104e5b%3A0x2a059b96b2fa348b!2s84%206th%20St%2C%20Parkmore%2C%20Sandton%2C%202196%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="group-hover:scale-105 transition-transform duration-700 ease-out"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <a 
                  href="https://www.google.com/maps/dir//84+6th+St,+Parkmore,+Sandton,+2196/@-26.1127038,27.9734927,15.12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e9573c818104e5b:0x2a059b96b2fa348b!2m2!1d28.0374026!2d-26.0987802?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-5 px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  <div className="bg-white/20 p-2 rounded-full mr-3 group-hover:bg-white/30 transition-colors duration-300">
                    <FaDirections size={18} />
                  </div>
                  <span className="text-lg">Get Directions</span>
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
