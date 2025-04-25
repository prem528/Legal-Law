import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';


const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's defend law together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and how we can assist you.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
              <Input id="phone" placeholder="+1 (123) 456-7890" />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
              <Textarea id="message" placeholder="Tell us about your legal concern..." rows={5} />
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 px-10">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
