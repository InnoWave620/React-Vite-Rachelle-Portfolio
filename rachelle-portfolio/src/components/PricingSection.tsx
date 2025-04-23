const PricingSection = () => {
    return (
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Fitness</h3>
              <p className="text-4xl font-bold mb-4 text-blue-700">R80/session</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Personal training</li>
                <li>Workout plans</li>
                <li>Nutrition advice</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-lg shadow text-white">
              <h3 className="text-2xl font-bold mb-4">1-Week Free Trial</h3>
              <p className="text-4xl font-bold mb-4">R0</p>
              <p className="text-xl mb-4">Start your fitness journey with no risk</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Full access to online workouts</li>
                <li>Personalized fitness assessment</li>
                <li>One virtual training session</li>
                <li>Transition to paid plan after week</li>
              </ul>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 w-full">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-blue-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Book Rachelle as a Model</h3>
              <p className="text-4xl font-bold mb-4 text-blue-700">R80/hour</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Photo shoots</li>
                <li>Fashion events</li>
                <li>Commercial appearances</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingSection;