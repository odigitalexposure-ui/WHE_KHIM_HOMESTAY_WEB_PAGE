import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { businessInfo } from "../data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tourist Spots", href: "#tourist-spots" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5 bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col">
            <a
              href="#home"
              className={`text-3xl md:text-4xl font-brush transition-colors duration-300 ${
                isScrolled ? "text-primary-green" : "text-white drop-shadow-md"
              }`}
            >
              {businessInfo.name}
            </a>
            <span
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? "text-earth-brown" : "text-white drop-shadow-md font-medium"
              }`}
            >
              {businessInfo.tagline}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-accent-orange ${
                  isScrolled ? "text-dark-charcoal" : "text-white drop-shadow-md"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent-orange hover:bg-yellow-600 text-white px-6 py-2.5 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-sm"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-dark-charcoal" : "text-white"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-3xl border-t border-gray-100/50 px-4 pt-4 pb-8 space-y-4 flex flex-col mx-2 mb-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-dark-charcoal hover:text-accent-orange hover:bg-orange-50/50 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-accent-orange text-white px-4 py-3.5 rounded-xl text-base font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 mt-4"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
