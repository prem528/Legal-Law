import React from 'react';
import { Scale, FileCheck, Clock, Shield } from 'lucide-react';
import { Button } from '../ui/button';
 

const serviceFeaturesData = [
  {
    icon: <Scale className="h-12 w-12 text-brand-blue" />,
    title: "Legal Expertise",
    description: "Our attorneys have years of experience in various legal fields to provide you with the best advice."
  },
  {
    icon: <FileCheck className="h-12 w-12 text-brand-blue" />,
    title: "Document Review",
    description: "Get your legal documents reviewed by our experts to ensure they meet all legal requirements."
  },
  {
    icon: <Clock className="h-12 w-12 text-brand-blue" />,
    title: "24/7 Support",
    description: "Access legal support whenever you need it with our round-the-clock availability."
  },
  {
    icon: <Shield className="h-12 w-12 text-brand-blue" />,
    title: "Client Protection",
    description: "We prioritize your privacy and provide confidential legal services for all clients."
  }
];

const ServiceFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive legal services designed to meet your specific needs with features that ensure quality and satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceFeaturesData.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
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
