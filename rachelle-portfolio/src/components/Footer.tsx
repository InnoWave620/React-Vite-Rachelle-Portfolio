import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">TrainWithRay Fitness</h3>
            <p className="text-gray-300 text-sm">© 2023 All rights reserved</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/rachelle_hamalainen/" className="text-xl hover:text-blue-300">
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/people/Rachelle-Katja-Hamalainen/100089293890428/" className="text-xl hover:text-blue-300">
              <FaFacebook />
            </a>
            {/* <a href="https://www.twitter.com/rachelle_profile" className="text-xl hover:text-blue-300">
              <FaTwitter />
            </a> */}
            <a href="https://www.youtube.com/@Goldenguitargirll" className="text-xl hover:text-blue-300">
              <FaYoutube />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-300 text-sm text-center md:text-right">
              Developed by Innowave620
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;