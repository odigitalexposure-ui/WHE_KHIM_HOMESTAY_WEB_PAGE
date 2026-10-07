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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Immersive Cinematic Background Slider */}
      {heroImages.map((img, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div 
            key={idx} 
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Dark overlays for perfect text readability and dramatic effect */}
            <div className="absolute inset-0 bg-black/40 z-10" /> 
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" /> 
            
            {/* The image itself with a slow continuous zoom (Ken Burns effect) */}
            <img 
              src={img} 
              alt={`Hero landscape ${idx}`} 
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                isActive ? "scale-110" : "scale-100"
              }`} 
            />
          </div>
        );
      })}

      {/* Hero Content Center Aligned */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-16 md:mt-24">
        
        {/* Top Tagline */}
        <div 
          className="flex items-center gap-3 mb-4 md:mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <span className="w-10 md:w-16 h-[2px] bg-accent-orange shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span> 
          <span className="text-white/95 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm font-semibold drop-shadow-md">
            Welcome to Paradise
          </span>
          <span className="w-10 md:w-16 h-[2px] bg-accent-orange shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span> 
        </div>
        
        {/* Main Headline */}
        <h1 
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-white leading-[1.1] mb-2 md:mb-4 drop-shadow-2xl animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Escape to the <br />
          <span className="font-brush text-[4.5rem] md:text-[8rem] lg:text-[10rem] text-accent-orange font-normal mt-0 md:mt-2 inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] filter brightness-110">
            Himalayas
          </span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-gray-200 text-sm md:text-xl lg:text-2xl mb-10 max-w-2xl font-light drop-shadow-lg leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Experience serene luxury and authentic hospitality at <br className="hidden md:block" />
          <strong className="font-bold text-white tracking-wide">{businessInfo.name}</strong>, your home amidst the clouds.
        </p>
        

      </div>



      {/* Scroll Down Mouse Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 right-8 lg:right-12 z-30 hidden md:flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white absolute top-0 left-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </a>
      
    </section>
  );
};

export default Hero;
