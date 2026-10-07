import { useState, useEffect } from "react";
import { Mountain, TreePine, Sun, Dog } from "lucide-react";
import { services } from "../data/content";

const iconMap = {
  Mountain: Mountain,
  TreePine: TreePine,
  Sun: Sun,
  Dog: Dog,
};

// Specifically requested images for the About slider
const aboutImages = [
  new URL('../assets/img1.png', import.meta.url).href,
  new URL('../assets/img3.jpeg', import.meta.url).href,
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Premium Card Base */}
        <div 
          className="bg-white rounded-[32px] md:rounded-[48px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 md:p-12 lg:p-16 relative overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            
            {/* Left: Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
              <h4 className="text-accent-orange font-brush text-3xl md:text-4xl mb-2 tracking-wide transform -rotate-1 origin-left" data-aos="fade-up" data-aos-delay="100">
                A Home In The Himalayas
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2a3c24] mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
                Experience the True Essence of Darjeeling
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="300">
                Nestled in the peaceful village of Yolmo Gaon, Upper Lamahatta, 
                <strong className="text-[#2a3c24]"> WHE KHIM HOMESTAY </strong> 
                offers a serene retreat away from the bustle of city life. Surrounded by lush greenery, pine forests, and breathtaking Himalayan views, we provide a warm, comfortable, and authentic local atmosphere.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Whether you are looking for a quiet nature escape, a comfortable stopover while exploring Darjeeling and Tukdah, or a place to experience genuine Himalayan hospitality, our home is ready to welcome you.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="text-accent-orange p-3 bg-orange-50 rounded-xl group-hover:bg-accent-orange group-hover:text-white transition-colors duration-300">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2a3c24] mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Image Auto Slider */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-auto lg:flex-1 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group border-[8px] border-white">
                
                {aboutImages.map((img, idx) => {
                  // Sliding transition (Right to Left)
                  let transformClass = "translate-x-full opacity-0 z-0"; 
                  if (idx === currentSlide) {
                    transformClass = "translate-x-0 opacity-100 z-10"; // Active
                  } else if (idx === (currentSlide - 1 + aboutImages.length) % aboutImages.length) {
                    transformClass = "-translate-x-full opacity-0 z-0"; // Outgoing
                  } else {
                    transformClass = "translate-x-full opacity-0 z-0 hidden"; // Waiters
                  }

                  return (
                    <div 
                      key={idx}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${transformClass}`}
                    >
                      {/* Using object-contain to prevent the poster from being cropped */}
                      <img
                        src={img}
                        alt="About WHE KHIM Homestay"
                        className="w-full h-full object-contain bg-gray-50/50"
                      />
                    </div>
                  );
                })}

                {/* Optional Dots for slider */}
                <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
                  {aboutImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === currentSlide ? "w-8 bg-accent-orange shadow-md" : "w-2 bg-white/70 shadow-md"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
