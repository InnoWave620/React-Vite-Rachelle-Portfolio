const ContactInfo = () => {
    return (
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center px-8 py-3 rounded-full">Get In Touch</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-gray-600 mb-4">
              <strong>Phone:</strong> +27 60 548 6585
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> rachelle@onceactive.co.za 
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> Once Active Gym, 84 6th St, Parkmore, Sandton, 2196
            </p>
            <p className="text-gray-600 mb-4">
              Available for appointments Monday-Friday from 9 AM to 6 PM
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Location:</strong> <a href="https://www.google.com/maps/dir//84+6th+St,+Parkmore,+Sandton,+2196/@-26.1127038,27.9734927,15.12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e9573c818104e5b:0x2a059b96b2fa348b!2m2!1d28.0374026!2d-26.0987802?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-blue-600 hover:text-blue-800">
                Get Directions
              </a>
            </p>
            {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 mt-6">
              Book Now
            </button> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactInfo;