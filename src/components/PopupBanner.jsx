import { useState, useEffect } from "react";
import bannerImg from "../assets/banner_img.jpeg";

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300">
      <div className="relative max-w-4xl w-full shadow-2xl rounded-lg animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-10 right-0 md:-right-10 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-md"
          aria-label="Close banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Banner Image */}
        <img
          src={bannerImg}
          alt="Promotional Banner"
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default PopupBanner;
