import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';


const QuickContact: React.FC = () => {
  return (
    <section className="py-12  px-24 bg-blue-200" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Quick Contact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Some Steps You Must Take To Get The Best Legal Service.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              
              <Input type="text" placeholder="Your full name" className="w-full" />
            </div>
            <div className="space-y-4">
             
              <Input type="email" placeholder="Your email address" className="w-full" />
            </div>
            <div className="space-y-4">
              
              <Input type="tel" placeholder="Your phone number" className="w-full" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button size="lg" className="bg-blue-400 hover:bg-brand-orange/90">Get Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
