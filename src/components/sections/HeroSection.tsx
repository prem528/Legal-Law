import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional: you can use icons for better arrows

const slides = [
  {
    image: "/law.svg",
    title: "Empowering Justice with Affordable Legal Support",
    description: "Get expert legal advice from seasoned attorneys. We make justice affordable and accessible for all.",
    button: "Schedule Consultation"
  },
  {
    image: "/law1.svg",
    title: "Your Rights, Our Mission",
    description: "Dedicated to protecting your legal rights with transparency, integrity, and expertise.",
    button: "Know Your Rights"
  },
  {
    image: "/law11.png",
    title: "Trusted Legal Solutions for Every Need",
    description: "Partner with top attorneys for business, family, and criminal legal consultations.",
    button: "Get Started"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center px-4 sm:px-6 lg:px-24 bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          key={currentSlide} // Important to re-trigger animation
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={slides[currentSlide].image}
          alt="Legal background"
          className="w-full h-full object-cover scale-105 opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-transparent"></div>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10">
        <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/40" onClick={goToPrevSlide}>
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
        <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/40" onClick={goToNextSlide}>
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative z-10 w-full text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-6">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-md px-6">
            {slides[currentSlide].button}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black shadow-md px-6"
          >
            Learn More
          </Button>
        </div>

        {/* Slide Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
