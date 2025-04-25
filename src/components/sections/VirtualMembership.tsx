import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const VirtualMembership: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Virtual Lawyer Membership</h2>
            <p className="text-gray-100 mb-6">
              Get unlimited access to legal consultations, document reviews, and personalized legal advice for a fixed monthly fee. Our virtual lawyer membership is designed to provide affordable legal services to individuals and businesses.
            </p>
          </div>
          <div>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 group">
              Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualMembership;