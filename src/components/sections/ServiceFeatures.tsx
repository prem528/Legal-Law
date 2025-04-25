import React from 'react';
import { Button } from '../ui/button';

const serviceFeaturesData = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/3122/3122321.png",
    title: "Legal Expertise",
    description: "Our attorneys have years of experience in various legal fields to provide you with the best advice."
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/3207/3207567.png",
    title: "Document Review",
    description: "Get your legal documents reviewed by our experts to ensure they meet all legal requirements."
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/5167/5167002.png",
    title: "24/7 Support",
    description: "Access legal support whenever you need it with our round-the-clock availability."
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/9743/9743171.png",
    title: "Client Protection",
    description: "We prioritize your privacy and provide confidential legal services for all clients."
  }
];

const ServiceFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Service Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive legal services designed to meet your specific needs with features that ensure quality and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceFeaturesData.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-brand-orange hover:bg-brand-orange/90">Explore All Features</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
