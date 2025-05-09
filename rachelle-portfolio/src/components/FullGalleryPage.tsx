import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaExpand, FaTimes } from 'react-icons/fa';
import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery2 from '../assets/images/gallery2.jpg';
import Gallery3 from '../assets/images/gallery3.jpg';
import Gallery4 from '../assets/images/gallery4.jpg';
import bgPic from '../assets/images/bg pic.jpg';

// Import all gym images
// Note: This approach requires Vite's import.meta.glob feature
const gymImagesImports = import.meta.glob('../assets/images/gym/*.{jpg,jpeg,png,gif,webp}', { eager: true });

// Import all modeling images
const modellingImagesImports = import.meta.glob('../assets/images/modelling/*.{jpg,jpeg,png,gif,webp}', { eager: true });

const FullGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'gym' | 'modeling'>('gym');
  const [gymImages, setGymImages] = useState<string[]>([]);
  const [modellingImages, setModellingImages] = useState<string[]>([]);
  
  // Process images on component mount
  useEffect(() => {
    // Convert the imported modules to arrays of image URLs
    const gymImageUrls = Object.values(gymImagesImports).map(
      (module: any) => module.default || module
    );
    
    const modellingImageUrls = Object.values(modellingImagesImports).map(
      (module: any) => module.default || module
    );
    
    setGymImages(gymImageUrls);
    setModellingImages(modellingImageUrls);
  }, []);
  
  // Fallback images if folders are empty
  const fallbackImages = Array(20).fill(null).map((_, i) => {
    return [Gallery1, Gallery2, Gallery3, Gallery4][i % 4];
  });
  
  // If images aren't loaded yet, use fallback images
  const currentGymImages = gymImages.length > 0 ? gymImages : fallbackImages;
  const currentModellingImages = modellingImages.length > 0 ? modellingImages : fallbackImages;
  
  const currentImages = activeCategory === 'gym' ? currentGymImages : currentModellingImages;

  return (
    <div 
      className="min-h-screen py-32 relative"
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
        <div className="flex items-center justify-between mb-12">
          <a 
            href="/#gallery" 
            className="flex items-center text-blue-300 hover:text-blue-100 transition-colors"
          >
            <span className="mr-2"><FaArrowLeft /></span> Back to Home
          </a>
          <h1 className="text-4xl font-bold text-white">Full Gallery</h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-blue-900/50 backdrop-blur-md rounded-full p-1.5 border border-white/10">
            <button 
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === 'gym' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg' 
                  : 'text-blue-200 hover:text-white'
              }`}
              onClick={() => setActiveCategory('gym')}
            >
              Gym Gallery
            </button>
            <button 
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === 'modeling' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg' 
                  : 'text-blue-200 hover:text-white'
              }`}
              onClick={() => setActiveCategory('modeling')}
            >
              Modeling Campaigns
            </button>
          </div>
        </div>
        
        {/* Category title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {activeCategory === 'gym' ? 'Fitness Journey' : 'Modeling Portfolio'}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.03] cursor-pointer flex flex-col items-center justify-center bg-blue-900/30 p-2 aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"></div>
              
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover rounded-xl border border-white/10 shadow-xl"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">
                    {activeCategory === 'gym' ? 'Fitness' : 'Modeling'} #{index + 1}
                  </span>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                    <FaExpand size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md z-20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <FaTimes />
            </button>
            
            <div className="flex items-center justify-between w-full h-full px-4">
              <button 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = currentImages.indexOf(selectedImage);
                  const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
                  setSelectedImage(currentImages[prevIndex]);
                }}
              >
                <FaArrowLeft />
              </button>
              
              <div className="flex-1 h-full flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Selected gallery image" 
                  className="max-h-screen max-w-full object-contain p-4"
                  style={{ height: 'calc(100vh - 80px)' }}
                />
              </div>
              
              <button 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = currentImages.indexOf(selectedImage);
                  const nextIndex = (currentIndex + 1) % currentImages.length;
                  setSelectedImage(currentImages[nextIndex]);
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullGalleryPage;





