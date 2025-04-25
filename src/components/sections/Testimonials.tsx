import React from 'react';

const testimonialsData = [
  {
    content: "The legal advice I received was exceptional. The attorney took time to understand my case and provided clear guidance that helped me resolve my issue quickly.",
    name: "Maria Knight",
    location: "Business Owner",
    rating: 5
  },
  {
    content: "I was impressed by how affordable yet professional their services were. They made legal help accessible when I thought I couldn't afford it.",
    name: "David Wilson",
    location: "Teacher",
    rating: 5
  },
  {
    content: "Their team went above and beyond to help with my property dispute. The outcome was better than I expected, and the process was smooth.",
    name: "Aisha Gupta",
    location: "Real Estate Agent",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="whyus">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Words From Clients</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our clients have to say about their experience with our legal services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center text-gray-700 font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
