import logo from '../assets/images/raylogo-Photoroom.png';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Train With Ray Logo" className="h-10 mr-4" />
          <div className="text-xl font-bold">Train With Ray Fitness</div>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
          <a href="#gallery" className="hover:text-blue-200">Gallery</a>
          <a href="#pricing" className="hover:text-blue-200">Pricing</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;