export const businessInfo = {
  name: "WHE KHIM HOMESTAY",
  tagline: "THE HUMMY'S HIMALAYAN HOME",
  subtitle: "Stay Closer to Nature, Feel at Home",
  address: "Yolmo Gaon, Upper Lamahatta, Singringtam, Tukdah, Darjeeling, West Bengal – 734213, India",
  phone: "+91 7596814231",
  phoneLink: "+917596814231",
  secondaryPhone: "+91 9674360719",
  secondaryPhoneLink: "+919674360719",
  email: "satabdibose4361@gmail.com",
  whatsapp: "+91 7596814231",
  whatsappLink: "917596814231"
};

export const heroImages = [
  new URL('../assets/hero1.png', import.meta.url).href,
  new URL('../assets/hero2.png', import.meta.url).href,
  new URL('../assets/hero3.png', import.meta.url).href,
  new URL('../assets/hero4.png', import.meta.url).href,
  new URL('../assets/hero5.jpeg', import.meta.url).href,
  new URL('../assets/hero6.jpeg', import.meta.url).href,
  new URL('../assets/hero7.jpeg', import.meta.url).href,
  new URL('../assets/hero8.jpeg', import.meta.url).href,
  new URL('../assets/hero9.jpeg', import.meta.url).href,
];

export const galleryImages = [
  ...[2, 7, 9, 12, 14, 17].map(i => new URL(`../assets/img${i}.jpeg`, import.meta.url).href),
  new URL('../assets/gallery_new_ext.png', import.meta.url).href,
  new URL('../assets/gallery_new_bed.png', import.meta.url).href,
  new URL('../assets/gallery_new_bath.jpg', import.meta.url).href,
];

export const videos = Array.from({ length: 4 }, (_, i) =>
  new URL(`../assets/vid${i + 1}.mp4`, import.meta.url).href
);

export const pricing = [
  { persons: "1 Person", title: "Solo Traveler", price: "₹1398", rating: "4.8", image: new URL('../assets/img14.jpeg', import.meta.url).href },
  { persons: "2 Person", title: "Couples Retreat", price: "₹1298", rating: "4.9", image: new URL('../assets/img11.jpeg', import.meta.url).href },
  { persons: "4 Person", title: "Family Getaway", price: "₹1198", rating: "4.9", image: new URL('../assets/img6.jpeg', import.meta.url).href },
  { persons: "6 Person", title: "Group Adventure", price: "₹1098", rating: "5.0", image: new URL('../assets/img2.jpeg', import.meta.url).href },
  { persons: "8 Person", title: "Grand Gathering", price: "₹998", rating: "4.7", image: new URL('../assets/img3.jpeg', import.meta.url).href }
];

export const services = [
  {
    title: "Pine Forest & Toy Train",
    description: "Just a few steps away from the homestay. Experience scenic routes and nature.",
    icon: "TreePine"
  },
  {
    title: "Mesmerizing Himalayan Views",
    description: "Enjoy breathtaking views of the mountains right from the comfort of our home.",
    icon: "Mountain"
  },
  {
    title: "Peace & Positivity",
    description: "A calm environment away from busy city life for a refreshing retreat.",
    icon: "Sun"
  },
  {
    title: "Pet Friendly",
    description: "Your furry friends are welcome! We even provide pet food for free.",
    icon: "Dog"
  }
];

export const amenities = [
  {
    title: "Food Provided",
    description: "Delicious & authentic food with a homely feel.",
    icon: "Utensils"
  },
  {
    title: "Complimentary Tea",
    description: "Enjoy complimentary warm tea during your stay.",
    icon: "Coffee"
  },
  {
    title: "High Speed Wi-Fi",
    description: "Stay connected with high-speed internet access.",
    icon: "Wifi"
  },
  {
    title: "Bonfire Outdoor Sitting",
    description: "Cozy outdoor bonfire sitting areas for chilly evenings.",
    icon: "Flame"
  },
  {
    title: "Luxury Rooms",
    description: "Comfortable and well-equipped luxury rooms for a relaxing stay.",
    icon: "Bed"
  },
  {
    title: "Duplex Super View Kanchenjunga",
    description: "Special duplex rooms offering a super view of Mt. Kanchenjunga.",
    icon: "MountainSnow"
  },
  {
    title: "Ample Parking",
    description: "Safe and spacious parking available for your vehicles.",
    icon: "Car"
  },
  {
    title: "24x7 Room Service",
    description: "Round-the-clock room service to cater to your needs.",
    icon: "BellRing"
  }
];

