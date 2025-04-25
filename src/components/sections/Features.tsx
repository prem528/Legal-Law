import React from 'react';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Expert Attorneys",
    description: "Our team consists of experienced lawyers specializing in various fields of law."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Client-Centered Approach",
    description: "We prioritize your needs and provide personalized legal solutions."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
    title: "Transparent Pricing",
    description: "No hidden fees. We offer clear and affordable pricing for all our services."
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-500" />,
    title: "Quick Response",
    description: "We value your time and provide prompt responses to your legal concerns."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-0 px-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto">
            Our team of expert attorneys is dedicated to providing high-quality legal services at affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center px-6 py-6"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 text-md">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;