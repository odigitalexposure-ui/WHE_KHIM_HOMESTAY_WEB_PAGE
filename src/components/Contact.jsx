import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { businessInfo } from "../data/content";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const messageText = `Hello ${businessInfo.name}, I would like to enquire about staying at ${businessInfo.tagline}.
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Check-in: ${formData.checkIn || "N/A"}
Check-out: ${formData.checkOut || "N/A"}
Guests: ${formData.guests || "N/A"}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappLink}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Optional: clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info Card */}
          <div className="w-full lg:w-5/12 lg:order-1 order-2">
            <div className="bg-primary-green text-white rounded-xl p-8 md:p-12 shadow-2xl h-full flex flex-col justify-center">
              <h4 className="text-accent-orange tracking-widest uppercase text-sm font-semibold mb-3">
                Get In Touch
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Plan Your Himalayan Stay
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-accent-orange shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold text-lg mb-1">{businessInfo.name}</h5>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <Phone className="text-accent-orange shrink-0" size={24} />
                  <div>
                    <p className="text-white/80 text-sm md:text-base flex flex-wrap gap-2">
                      <a href={`tel:${businessInfo.phoneLink}`} className="hover:text-accent-orange transition-colors">
                        {businessInfo.phone}
                      </a>
                      <span className="text-white/50">/</span>
                      <a href={`tel:${businessInfo.secondaryPhoneLink}`} className="hover:text-accent-orange transition-colors">
                        {businessInfo.secondaryPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-accent-orange shrink-0" size={24} />
                  <div>
                    <p className="text-white/80 text-sm md:text-base break-all">
                      <a href={`mailto:${businessInfo.email}`} className="hover:text-accent-orange transition-colors">
                        {businessInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={`tel:${businessInfo.phoneLink}`}
                  className="flex-1 bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-center py-3 rounded-md transition-all text-sm uppercase tracking-wider font-medium"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsappLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#1ebd5b] text-white text-center py-3 rounded-md transition-all text-sm uppercase tracking-wider font-medium shadow-md"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="w-full lg:w-7/12 lg:order-2 order-1">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-serif text-dark-charcoal mb-6">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all bg-light-bg resize-none`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white px-6 py-4 rounded-md text-sm uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Send Enquiry on WhatsApp</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
