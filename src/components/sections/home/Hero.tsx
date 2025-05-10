import React, { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import { motion, useSpring } from 'framer-motion';
import AnimatedElement from '../../ui/AnimatedElement';
import { Shield, Clock, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const smoothX = useSpring(0, {
    stiffness: 50,
    damping: 20
  });
  const smoothY = useSpring(0, {
    stiffness: 50,
    damping: 20
  });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      smoothX.set(x);
      smoothY.set(y);
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const words = ["Scale.", "Grow.", "Thrive.", "Win."];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-electric-500/10 to-coral-500/10 opacity-30"
          style={{
            x: smoothX,
            y: smoothY
          }}
        />
        
        <motion.div
          className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-electric-500/20 rounded-full filter blur-[100px]"
          style={{
            x: smoothX.get() * -1.5,
            y: smoothY.get() * -1.5
          }}
        />
        
        <motion.div
          className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-coral-500/20 rounded-full filter blur-[80px]"
          style={{
            x: smoothX.get() * 1.5,
            y: smoothY.get() * 1.5
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedElement>
            <div className="text-center">
              <motion.div 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-light-900 mb-2">Watch Your Business</div>
                <motion.span
                  key={currentWord}
                  className="text-electric-500 inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWord]}
                </motion.span>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-light-600 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Data-driven digital marketing with proven results. Get 348% average ROAS 
                and dedicated support from our expert team.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-electric-500" />
                  <span className="text-light-600">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-electric-500" />
                  <span className="text-light-600">Fast Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-electric-500" />
                  <span className="text-light-600">Expert Team</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button to="/contact" variant="primary" size="lg">
                  Get Free Strategy Call
                </Button>
                <Button to="/case-studies" variant="outline" size="lg" icon={null}>
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;