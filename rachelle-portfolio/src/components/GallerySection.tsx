import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery2 from '../assets/images/gallery2.jpg'; // Adjust the path as necessary
import Gallery3 from '../assets/images/gallery3.jpg'; // Adjust the path as necessary
import Gallery4 from '../assets/images/gallery4.jpg'; // Adjust the path as necessary

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img 
              src={Gallery1} 
              alt="Trainer" 
              className="rounded-xl max-w-full h-auto"
              style={{ maxWidth: '300px' }}
            />
                  <img 
              src={Gallery2} 
              alt="Trainer" 
              className="rounded-xl max-w-full h-auto"
              style={{ maxWidth: '300px' }}
            />
                  <img 
              src={Gallery3} 
              alt="Trainer" 
              className="rounded-xl max-w-full h-auto"
              style={{ maxWidth: '300px' }}
            />
                  <img 
              src={Gallery4} 
              alt="Trainer" 
              className="rounded-xl max-w-full h-auto"
              style={{ maxWidth: '300px' }}
            />
          {/* More images */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;