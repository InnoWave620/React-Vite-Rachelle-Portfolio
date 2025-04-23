import { FaDumbbell, FaUsers, FaAppleAlt, FaLaptop, FaCamera, FaRss, FaBriefcase, FaFolder } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
              <span className="text-blue-500 text-2xl mr-2">
                <FaDumbbell />
              </span>
              Fitness Training
            </h3>
            <ul className="list-none text-gray-600">
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaUsers />
                </span>
                Personal training
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaUsers />
                </span>
                Group classes
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaAppleAlt />
                </span>
                Nutrition guidance
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaLaptop />
                </span>
                Online programs
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
              <span className="text-blue-500 text-2xl mr-2">
                <FaCamera />
              </span>
              Modelling
            </h3>
            <ul className="list-none text-gray-600">
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaCamera />
                </span>
                Photo shoots
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaRss />
                </span>
                Fashion events
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaBriefcase />
                </span>
                Commercial appearances
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-blue-500 text-xl mr-2">
                  <FaFolder />
                </span>
                Portfolio development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;