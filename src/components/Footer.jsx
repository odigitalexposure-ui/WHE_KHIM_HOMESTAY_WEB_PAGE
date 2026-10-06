import { businessInfo, heroImages } from "../data/content";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Banner Section */}
      <div className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={heroImages[1] || heroImages[0]}
          alt="Himalayan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
            YOUR HIMALAYAN ESCAPE AWAITS
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Come experience the warmth of {businessInfo.tagline}.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent-orange hover:bg-yellow-600 text-white px-8 py-3.5 rounded-sm uppercase tracking-wider text-sm transition-colors shadow-lg"
          >
            Send an Enquiry
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-dark-charcoal text-white pt-16 pb-8 border-t-4 border-primary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">

            {/* Column 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-wider text-white">
                {businessInfo.name}
              </h3>
              <p className="text-xs tracking-widest uppercase text-accent-orange mb-4">
                {businessInfo.tagline}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A peaceful homestay nestled in the serene hills of Darjeeling. Experience authentic hospitality, stunning mountain views, and the calming beauty of nature.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-serif mb-6 text-white border-b border-gray-700 pb-2 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Pricing", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-accent-orange transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-serif mb-6 text-white border-b border-gray-700 pb-2 inline-block">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-400 text-sm leading-relaxed">
                  <span className="block text-white mb-1">Address:</span>
                  {businessInfo.address}
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-serif mb-6 text-white border-b border-gray-700 pb-2 inline-block">
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`https://wa.me/${businessInfo.whatsappLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-accent-orange transition-colors text-sm"
                  >
                    <span className="w-20 text-white">WhatsApp:</span>
                    {businessInfo.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${businessInfo.phoneLink}`}
                    className="flex items-center text-gray-400 hover:text-accent-orange transition-colors text-sm"
                  >
                    <span className="w-20 text-white shrink-0">Phone:</span>
                    {businessInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${businessInfo.secondaryPhoneLink}`}
                    className="flex items-center text-gray-400 hover:text-accent-orange transition-colors text-sm"
                  >
                    <span className="w-20 text-white shrink-0">Alt Phone:</span>
                    {businessInfo.secondaryPhone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="flex items-center text-gray-400 hover:text-accent-orange transition-colors text-sm break-all"
                  >
                    <span className="w-20 text-white">Email:</span>
                    {businessInfo.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs md:text-sm">
              &copy; {new Date().getFullYear()} {businessInfo.name}. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Design & Developed By <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
              >
                Digital Exposure Online Services
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${businessInfo.whatsappLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebd5b] hover:scale-110 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </footer>
  );
};

export default Footer;
