import { useState, useEffect } from "react";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { touristSpots } from "../data/content";

const TouristSpots = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : touristSpots.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < touristSpots.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "ArrowRight") nextImage(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="tourist-spots" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-accent-orange tracking-widest uppercase text-sm font-semibold mb-3">
            Nearby Attractions
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-green mb-6">
            Explore Tourist Spots
          </h2>
          <p className="text-gray-600 text-lg">
            Discover beautiful places and attractions just a short distance from WHE KHIM HOMESTAY.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristSpots.map((spot, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="bg-light-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col h-full cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <MapPin size={14} className="text-accent-orange" />
                  <span className="text-sm font-medium text-primary-green">{spot.distance}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-primary-green mb-3 group-hover:text-accent-orange transition-colors duration-300">
                  {spot.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {spot.description}
                </p>
                <div className="flex items-center gap-2 text-accent-orange font-medium text-sm mt-auto pt-4 border-t border-gray-200">
                  <MapPin size={16} />
                  <span>Distance from homestay: {spot.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm px-4 md:px-16" onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-[110]"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Modal Content */}
          <div 
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col bg-white rounded-2xl shadow-2xl z-[105] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-[450px] w-full bg-gray-100 flex-shrink-0">
              <img
                src={touristSpots[lightboxIndex].image}
                alt={touristSpots[lightboxIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <MapPin size={18} className="text-accent-orange" />
                <span className="text-base font-semibold text-primary-green">{touristSpots[lightboxIndex].distance}</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col bg-white">
              <h3 className="text-2xl md:text-3xl font-serif text-primary-green mb-4">
                {touristSpots[lightboxIndex].name}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                {touristSpots[lightboxIndex].description}
              </p>
              <div className="flex items-center gap-3 text-accent-orange font-medium text-lg pt-5 border-t border-gray-100">
                <MapPin size={24} />
                <span>Distance from homestay: {touristSpots[lightboxIndex].distance}</span>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors z-[110]"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest z-[110]">
            {lightboxIndex + 1} / {touristSpots.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default TouristSpots;
