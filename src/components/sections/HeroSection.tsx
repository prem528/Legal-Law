import React from 'react';
import { Button } from '../ui/button';
 

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Legal professional working" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            To Provide <span className="text-brand-orange">Budget-Friendly Legal Help</span> To All Societal Segments
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Expert legal advice that's accessible to everyone. Our team of experienced attorneys is committed to providing affordable and quality legal services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">Schedule a Consultation</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;