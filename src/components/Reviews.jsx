import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    date: "October 2023",
    rating: 5,
    text: "Absolutely stunning homestay! The view of Kanchenjunga from the balcony was mesmerizing. The hosts are incredibly warm and the local food they prepared was delicious. Highly recommend for a peaceful retreat.",
  },
  {
    name: "Sneha Das",
    date: "November 2023",
    rating: 5,
    text: "A perfect blend of nature and comfort. The rooms were spotless and beautifully decorated. We loved sitting by the bonfire at night and enjoying the complimentary tea. Will definitely visit again!",
  },
  {
    name: "Amit Patel",
    date: "December 2023",
    rating: 5,
    text: "The best stay we've had in Darjeeling district. The nearby pine forest is perfect for morning walks. The pet-friendly atmosphere was a huge plus for our golden retriever. Outstanding hospitality.",
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-accent-orange tracking-widest uppercase text-sm font-semibold mb-3">
            Guest Testimonials
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-green mb-6">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 text-lg">
            Read about the experiences of travelers who found their perfect Himalayan retreat at WHE KHIM HOMESTAY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex text-accent-orange mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic flex-grow mb-6">
                "{review.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <h4 className="font-serif font-semibold text-primary-green text-lg">{review.name}</h4>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="text-gray-600 mb-6 text-lg font-medium">
            Have you stayed with us? We'd love to hear about your experience!
          </p>
          <a 
            href="https://share.google/xKcMyRxb82jVEbZ9e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-orange text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Star size={20} fill="currentColor" />
            Write a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
