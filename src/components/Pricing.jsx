import { pricing, businessInfo } from "../data/content";
import { Star, Heart, MapPin, Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 font-serif">
              Popular Packages
            </h2>
            <p className="text-text-muted max-w-2xl text-lg">
              Choose the perfect stay for you and your loved ones. All packages include complimentary tea, food, and high-speed Wi-Fi.
            </p>
          </div>
          <a
            href={`https://wa.me/${businessInfo.whatsappLink}?text=Hello, I would like to know more about the packages.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white border border-gray-200 text-text-main px-6 py-3 rounded-full font-medium hover:border-primary-green hover:text-primary-green hover:-translate-y-1 hover:shadow-lg transition-all flex items-center gap-2"
          >
            Contact Us
          </a>
        </div>

        {/* Festive Banner */}
        <div className="bg-gradient-to-r from-accent-orange/10 via-accent-orange/5 to-transparent border border-accent-orange/20 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 text-accent-orange/10">
            <Sparkles size={120} />
          </div>
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Special Offer
              </span>
              <span className="text-accent-orange font-bold">16th - 21st October, 2026</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-main mb-2">
              Festive Season Discount
            </h3>
            <p className="text-text-muted">
              Book your stay during the festive season and get an exclusive discount. Rooms are filling up fast!
            </p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
             <a
              href={`https://wa.me/${businessInfo.whatsappLink}?text=Hello, I want to book a stay between 16th-21st October 2026.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto bg-accent-orange text-white px-8 py-3 rounded-xl font-bold text-center hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-accent-orange/30"
            >
              Claim Offer
            </a>
          </div>
        </div>

        {/* Pricing Cards Carousel */}
        <div className="overflow-hidden relative group -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4" data-aos="fade-up" data-aos-delay="200">
          {/* Subtle gradient masks on the edges */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className="flex w-max gap-6 animate-marquee-slow">
            {[...pricing, ...pricing].map((item, index) => {
              return (
                <div 
                  key={index} 
                  className="group relative rounded-3xl overflow-hidden h-[380px] w-[260px] sm:w-[280px] shrink-0 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                
                {/* Top Section */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-xs font-bold text-gray-800">{item.rating}</span>
                  </div>
                  <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-colors">
                    <Heart className="text-white" size={18} />
                  </button>
                </div>

                {/* Bottom Section */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1 leading-tight font-serif">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-300">
                        <MapPin size={12} />
                        <span className="text-xs">{item.persons}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-white font-bold text-xl leading-none">
                        {item.price}
                      </div>
                      <div className="text-gray-300 text-[10px] uppercase tracking-wider mt-1">
                        / Day
                      </div>
                    </div>
                  </div>
                  
                  {/* Hidden Booking Button (shows on hover) */}
                  <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                    <a
                      href={`https://wa.me/${businessInfo.whatsappLink}?text=I'm interested in the ${item.persons} package (${item.price}/day).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-10 bg-primary-green text-white rounded-full font-medium text-sm hover:bg-green-700 transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
