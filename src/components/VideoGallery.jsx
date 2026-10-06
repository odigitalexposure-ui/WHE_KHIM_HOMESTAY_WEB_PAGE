import { useState } from "react";
import { videos } from "../data/content";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const VideoGallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  if (!videos || videos.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleClose = () => {
    setSelectedIdx(null);
  };

  return (
    <section id="videos" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-accent-orange tracking-widest uppercase text-sm font-semibold mb-3">
            Video Tour
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-green mb-6">
            Experience The Himalayas
          </h2>
          <p className="text-gray-600 text-lg">
            Immerse yourself in the sights and sounds of our homestay and the natural beauty that surrounds it.
          </p>
        </div>

        {/* Video Grid (Thumbnails) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 200}
              className="relative rounded-xl overflow-hidden bg-black shadow-lg hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 transition-all duration-500 cursor-pointer group aspect-video"
              onClick={() => setSelectedIdx(index)}
            >
              <video
                src={vid}
                preload="metadata"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20"
            onClick={handleClose}
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute left-2 md:left-10 text-white/70 hover:text-white transition-colors z-50 p-2 md:p-3 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/40"
            onClick={handlePrev}
          >
            <ChevronLeft size={36} />
          </button>

          {/* Video Player container */}
          <div 
            className="relative w-[95vw] md:w-[90vw] max-w-6xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={selectedIdx} // Force remount on change so autoplay triggers
              src={videos[selectedIdx]}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute right-2 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2 md:p-3 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/40"
            onClick={handleNext}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
