import { businessInfo, heroImages } from "../data/content";

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
      <div className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-primary-green">
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
              &copy; {new Date().getFullYear()} {businessInfo.name}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Design & Developed By <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent-orange hover:text-white transition-colors duration-300 ml-1"
              >
                Digital Exposure Online Services
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Calling Button */}
        <a
          href={`tel:${businessInfo.phoneLink}`}
          className="bg-[#007BFF] text-white p-4 rounded-full shadow-xl hover:bg-[#0056b3] hover:scale-110 transition-transform duration-300 group relative flex items-center justify-center"
          aria-label="Call us"
          title="Call us"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            Call us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${businessInfo.whatsappLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebd5b] hover:scale-110 transition-transform duration-300 group relative flex items-center justify-center"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            WhatsApp us
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
