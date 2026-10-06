import { Bed, Utensils, Car, Wifi, Flame, MountainSnow, BellRing, Coffee } from "lucide-react";
import { amenities } from "../data/content";

const iconMap = {
  Bed: Bed,
  Utensils: Utensils,
  Car: Car,
  Wifi: Wifi,
  Flame: Flame,
  MountainSnow: MountainSnow,
  BellRing: BellRing,
  Coffee: Coffee
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-accent-orange tracking-widest uppercase text-sm font-semibold mb-3">
            Amenities & Facilities
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-green mb-6">
            Comforts For Your Himalayan Stay
          </h2>
          <p className="text-gray-600 text-lg">
            We offer essential amenities to ensure your stay is comfortable, relaxing, and enjoyable amidst the beautiful nature of Lamahatta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="p-8 border border-gray-100 rounded-xl bg-light-bg hover:bg-white shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-primary-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon size={40} strokeWidth={1.5} />}
                </div>
                <h3 className="text-xl font-bold text-dark-charcoal mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
