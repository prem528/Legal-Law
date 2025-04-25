import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center px-4 sm:px-6 lg:px-24 bg-black">
      {/* Background image with zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/law11.png"
          alt="Legal background"
          className="w-full h-full object-cover scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
          Empowering Justice with <span className="text-orange-400">Affordable Legal Support</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-6">
          Get expert legal advice from seasoned attorneys. We make justice affordable and accessible for all.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-md px-6">
            Schedule a Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black shadow-md px-6"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
