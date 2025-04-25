import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Let's defend law together</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and how we can assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left: Form */}
          <div className="w-full lg:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                  <Input id="name" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                  <Input id="phone" placeholder="+1 (123) 456-7890" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <Textarea id="message" placeholder="Tell us about your legal concern..." rows={5} />
              </div>

              <div className="text-left">
                <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 w-full">Send</Button>
              </div>
            </form>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-3/4">
            <DotLottieReact
              src="https://lottie.host/a21fe69f-2a9f-4f76-9174-0a146099b428/sQy2XgEXda.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
