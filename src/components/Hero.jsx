import { useState, useEffect } from "react";
import { businessInfo, heroImages } from "../data/content";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#1a1c23]">
      
      {/* Container for the Large Card */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[450px] md:h-[500px] lg:h-[550px]">
        
        {/* The Premium Large Card */}
        <div className="w-full h-full relative rounded-[24px] md:rounded-[36px] overflow-hidden shadow-2xl shadow-black/50 border border-white/5 group">
          
          {/* Background Images Auto Sliding (Right to Left) */}
          {heroImages.map((img, idx) => {
            // Right to Left sliding logic: 
            // Incoming slides enter from right (translate-x-full)
            // Outgoing slides exit to left (-translate-x-full)
            let transformClass = "translate-x-full opacity-0 z-0 scale-105"; 
            if (idx === currentSlide) {
              transformClass = "translate-x-0 opacity-100 z-10 scale-100"; // Active
            } else if (idx === (currentSlide - 1 + heroImages.length) % heroImages.length) {
              transformClass = "-translate-x-full opacity-0 z-0 scale-105"; // Outgoing
            } else {
              transformClass = "translate-x-full opacity-0 z-0 hidden scale-105"; // Waiters
            }

            return (
              <div 
                key={idx} 
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${transformClass}`}
              >
                <img 
                  src={img} 
                  alt={`Hero mountain slide ${idx}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            );
          })}

          {/* Deep dark gradient overlay inside the card so text pops beautifully */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" /> {/* Subtle global darkening */}
          
          {/* Text Content Overlay (Stay on Left Side) */}
          <div className="absolute inset-0 z-30 flex flex-col justify-center px-6 md:px-12 lg:px-20 w-full max-w-4xl pb-4">
            <span className="text-white/90 tracking-widest uppercase text-xs md:text-sm font-bold mb-2 md:mb-3 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent-orange"></span> 
              <span className="drop-shadow-md">EXPLORE THE WORLD</span>
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-3 md:mb-4 drop-shadow-xl">
              Discover Nature.<br />
              <span className="font-brush text-5xl md:text-6xl lg:text-[6rem] text-accent-orange font-normal mt-1 inline-block drop-shadow-2xl">Find Your Escape.</span>
            </h1>
            
            <p className="text-white/90 text-sm md:text-base mb-6 md:mb-8 max-w-lg font-medium drop-shadow-lg leading-relaxed">
              Breathtaking places, unforgettable experiences, crafted just for you at {businessInfo.name}.
            </p>
            
            <a
              href="#about"
              className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1 flex items-center gap-2 group w-fit"
            >
              Explore Now 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Slide Navigation Indicators */}
          <div className="absolute bottom-8 left-6 md:left-16 z-30 flex gap-3">
            {heroImages.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 rounded-full transition-all duration-700 ease-out ${
                  idx === currentSlide ? "w-10 bg-accent-orange shadow-[0_0_10px_rgba(249,115,22,0.8)]" : "w-2 bg-white/40 hover:bg-white/60 cursor-pointer"
                }`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
