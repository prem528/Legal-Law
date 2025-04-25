import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';


const QuickContact: React.FC = () => {
  return (
    <section className="py-12 bg-brand-blue" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Name</h3>
              <Input type="text" placeholder="Your full name" className="w-full" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Email</h3>
              <Input type="email" placeholder="Your email address" className="w-full" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Phone</h3>
              <Input type="tel" placeholder="Your phone number" className="w-full" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">Get Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
