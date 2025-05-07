import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery2 from '../assets/images/gallery2.jpg';
import Gallery3 from '../assets/images/gallery3.jpg';
import Gallery4 from '../assets/images/gallery4.jpg';
import bgPic from '../assets/images/bg pic.jpg'; // Import background image
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [Gallery1, Gallery2, Gallery3, Gallery4];

  return (
    <section 
      id="gallery" 
      className="py-32 relative"
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
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6 relative inline-block">
            Gallery
            <div className="absolute w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-300 left-1/2 -bottom-4 transform -translate-x-1/2 rounded-full"></div>
          </h2>
          <p className="text-blue-100 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Explore my fitness journey and modeling portfolio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.03] cursor-pointer flex flex-col items-center justify-center bg-blue-900/30 p-2"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"></div>
              
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-xl"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Fitness Journey</span>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                    <FaExpand size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 border border-blue-400/30">
            View Full Gallery
          </button>
        </div>
      </div>
      
      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
            
            <div className="flex items-center justify-between">
              <button 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.indexOf(selectedImage);
                  const prevIndex = (currentIndex - 1 + images.length) % images.length;
                  setSelectedImage(images[prevIndex]);
                }}
              >
                <FaArrowLeft />
              </button>
              
              <img 
                src={selectedImage} 
                alt="Selected gallery image" 
                className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <button 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.indexOf(selectedImage);
                  const nextIndex = (currentIndex + 1) % images.length;
                  setSelectedImage(images[nextIndex]);
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
