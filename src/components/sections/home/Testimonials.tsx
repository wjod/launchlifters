import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../../ui/SectionHeading';
import TestimonialCard from '../../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../../ui/AnimatedElement';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials = [
    {
      quote: "Their team doesn't just focus on vanity metrics. They've helped us achieve real business growth with measurable ROI across all marketing channels.",
      author: "Michael Rivera",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      quote: "What sets LaunchLifters apart is their ability to translate complex data into actionable insights. Our conversion rate has increased by 156% since working with them.",
      author: "Jessica Wong",
      position: "E-commerce Manager",
      company: "Urban Attire",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    },
    {
      quote: "We've worked with several agencies before, but none delivered results like LaunchLifters. They understand our audience and consistently overdeliver on their promises.",
      author: "David Chen",
      position: "Founder",
      company: "HealthHarbor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
    {
      quote: "Their approach is refreshingly transparent. No vanity metrics, no fluff—just real business results backed by data and creativity.",
      author: "Sophia Martinez",
      position: "CMO",
      company: "Wellness Collective",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    },
  ];

  const trustedBrands = [
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      className: "h-6 opacity-70 hover:opacity-100 transition-opacity duration-200"
    },
    {
      name: "HubSpot",
      logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
      className: "h-7 opacity-70 hover:opacity-100 transition-opacity duration-200"
    },
    {
      name: "Salesforce",
      logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
      className: "h-8 opacity-70 hover:opacity-100 transition-opacity duration-200"
    },
    {
      name: "Zendesk",
      logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
      className: "h-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
    },
    {
      name: "Asana",
      logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
      className: "h-6 opacity-70 hover:opacity-100 transition-opacity duration-200"
    }
  ];
  
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        goToNext();
      }
    }, 6000);
    
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isAnimating]);
  
  const goToPrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  return (
    <section className="py-20 bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Results that speak for themselves from brands that scaled with our approach."
            alignment="center"
          />
        </AnimatedElement>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <TestimonialCard {...testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-dark-600 hover:border-electric-500 text-light-600 hover:text-electric-500 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (isAnimating) return;
                    setDirection(index > currentIndex ? 1 : -1);
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-electric-500' 
                      : 'bg-dark-600 hover:bg-light-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-dark-600 hover:border-electric-500 text-light-600 hover:text-electric-500 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
          
          {/* Client Logos */}
          <AnimatedElement delay={0.3}>
            <div className="mt-16">
              <p className="text-center text-light-600 mb-8 text-sm uppercase tracking-wider">
                Trusted by innovative brands
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                {trustedBrands.map((brand, index) => (
                  <motion.img
                    key={brand.name}
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={brand.className}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;