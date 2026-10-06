import { services } from "../data/content";
import * as Icons from "lucide-react";

const Features = () => {
  return (
    <section className="bg-light-bg relative z-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Features Bar - Auto Sliding Marquee */}
        <div 
          className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 py-6 md:py-8 border border-gray-100 overflow-hidden relative group"
          data-aos="fade-up"
        >
          
          {/* Subtle gradient masks on the edges for a smooth fade-in/out effect */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee group-hover:pause">
            {[...services, ...services].map((service, index) => {
              const Icon = Icons[service.icon] || Icons.CheckCircle;
              return (
                <div key={index} className="flex items-start gap-4 px-6 md:px-10 w-[280px] md:w-[350px]">
                  <div className="text-primary-green shrink-0 bg-primary-green/5 p-3 rounded-full">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-text-main mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>
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

export default Features;
