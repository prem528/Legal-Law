import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  background_url: string;
  button_text: string;
}

const HeroSection: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/api/hero-slides')
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Failed to fetch hero slides:", err));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides]);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  if (slides.length === 0) return null;

  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={slides[currentSlide].background_url}
          alt="Slide Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20">
        <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/40" onClick={() => paginate(-1)}>
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20">
        <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/40" onClick={() => paginate(1)}>
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Animate Content Only */}
      <div className="relative max-w-4xl w-full px-4 text-center z-10">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-md px-6">
                {slides[currentSlide].button_text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black shadow-md px-6"
              >
                Learn More
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
