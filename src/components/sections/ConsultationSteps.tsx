import React from 'react';
import { FileText, Phone, Calendar, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-brand-orange" />,
    title: "Fill Out Form",
    description: "Complete our simple online form with your details and legal concerns.",
    color: "bg-blue-50"
  },
  {
    icon: <Phone className="h-8 w-8 text-brand-orange" />,
    title: "Contact by a Consultant",
    description: "Our legal expert will contact you to understand your case better.",
    color: "bg-purple-50"
  },
  {
    icon: <Calendar className="h-8 w-8 text-brand-orange" />,
    title: "Schedule Consultation",
    description: "Pick a convenient time for your detailed consultation with our attorney.",
    color: "bg-green-50"
  },
  {
    icon: <UserCheck className="h-8 w-8 text-brand-orange" />,
    title: "Legal Consultation",
    description: "Meet with our expert attorney to discuss your legal options.",
    color: "bg-orange-50"
  }
];

const ConsultationSteps: React.FC = () => {
  return (
    <section className="py-16 px-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Steps To Get Legal Consultation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Follow these simple steps to get professional legal advice from our experts.
          </p>
        </div>
        
        <div className='relative'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className={`p-6 rounded-lg ${step.color} shadow-sm`}>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSteps;
