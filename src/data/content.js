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

export const touristSpots = [
  {
    name: "Lamahatta Eco Park",
    description: "Immerse yourself in nature's embrace at this tranquil eco-park. Wander through misty pine forests, vibrant prayer flags, and manicured gardens while soaking in breathtaking, unhindered views of the majestic mountain ranges.",
    distance: "1-2 km",
    image: new URL('../assets/tourist_img1.png', import.meta.url).href
  },
  {
    name: "Castleton Tea Estate",
    description: "Stroll through the lush, emerald green slopes of this world-renowned tea estate. Capture picture-perfect moments amidst the rolling hills and breathe in the crisp, aromatic air of Darjeeling's finest tea gardens.",
    distance: "2.9-3 km",
    image: new URL('../assets/tourist_img2.png', import.meta.url).href
  },
  {
    name: "Ambotia Shiva Mandir",
    description: "Find spiritual solace and divine tranquility at this revered local temple. Nestled amidst serene natural surroundings, it's the perfect spot for quiet reflection, meditation, and escaping the bustling outside world.",
    distance: "2.9-3 km",
    image: new URL('../assets/tourist_img3.png', import.meta.url).href
  },
  {
    name: "Giddapahar View Point",
    description: "Experience a sweeping panorama of the Himalayan landscape from this spectacular vantage point. Perfect for photography enthusiasts looking to capture the dramatic valleys, winding roads, and endless skies of the region.",
    distance: "2.9-3 km",
    image: new URL('../assets/tourist_img4.png', import.meta.url).href
  },
  {
    name: "Tinchuley Viewpoint",
    description: "A charming hillside hamlet offering an untouched slice of paradise. Famous for its sprawling tea gardens, fresh orange orchards, and unparalleled, 180-degree panoramic views of the mighty Kanchenjunga.",
    distance: "6–8 km",
    image: new URL('../assets/tourist_img5.png', import.meta.url).href
  },
  {
    name: "Takdah Orchid Centre",
    description: "Step into a floral wonderland showcasing a rare, mesmerizing collection of Himalayan orchids and exotic ornamental plants. A true paradise for nature lovers and botany enthusiasts seeking vibrant colors and sweet fragrances.",
    distance: "8–12 km",
    image: new URL('../assets/tourist_img6.png', import.meta.url).href
  },
  {
    name: "Batasia Loop",
    description: "Witness an engineering marvel where the heritage Toy Train spirals around a beautifully landscaped garden. Enjoy a 360-degree vista of Darjeeling's rolling hills and the snow-capped Kanchenjunga towering in the distance.",
    distance: "20–27 km",
    image: new URL('../assets/tourist_img7.png', import.meta.url).href
  },
  {
    name: "Tiger Hill",
    description: "The crown jewel of Darjeeling, famous worldwide for its magical sunrises. Watch in awe as the first light of dawn paints the snow-clad peaks of Mount Kanchenjunga and Everest in breathtaking shades of pink and gold.",
    distance: "20–30 km",
    image: new URL('../assets/tourist_img8.png', import.meta.url).href
  },
  {
    name: "Japanese Peace Pagoda",
    description: "Discover profound peace at this stunning Buddhist monument showcasing magnificent traditional architecture. The gleaming white stupa offers a serene atmosphere coupled with spectacular, sweeping views of the entire Darjeeling valley.",
    distance: "22–28 km",
    image: new URL('../assets/tourist_img9.png', import.meta.url).href
  }
];

