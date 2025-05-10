import React from 'react';
import Button from '../components/ui/Button';
import { Shield, Briefcase, Lightbulb, PieChart, Users, ArrowRight, Target, Zap, LineChart, Heart, Code, Gauge } from 'lucide-react';
import AnimatedElement from '../components/ui/AnimatedElement';
import { motion, useScroll, useSpring } from 'framer-motion';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Data-Driven Results",
      description: "Every campaign is optimized based on real-time performance data and market insights."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Local Expertise",
      description: "We understand your market and provide strategies that work for your specific audience."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Support",
      description: "Direct access to your dedicated team with fast response times and regular updates."
    }
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-500 z-50 origin-left"
        style={{ scaleX }}
      />
      {/* Hero Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-electric-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-coral-500/20 rounded-full filter blur-[80px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-5xl mx-auto">
            <AnimatedElement>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-light-900">
                  Your Growth <span className="text-electric-500">Partner</span>
                </h1>
                <p className="text-xl text-light-600 max-w-3xl mx-auto">
                  Helping businesses achieve sustainable growth through personalized digital marketing strategies since 2017.
                </p>
              </div>
            </AnimatedElement>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AnimatedElement delay={0.2}>
                <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-electric-500/10 rounded-lg mb-4 text-electric-500">
                    <Target size={24} />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">348%</div>
                  <div className="text-light-600">Avg. ROAS</div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.3}>
                <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-electric-500/10 rounded-lg mb-4 text-electric-500">
                    <Zap size={24} />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">85+</div>
                  <div className="text-light-600">Active Clients</div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.4}>
                <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-electric-500/10 rounded-lg mb-4 text-electric-500">
                    <Users size={24} />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">97%</div>
                  <div className="text-light-600">Client Retention</div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.5}>
                <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-electric-500/10 rounded-lg mb-4 text-electric-500">
                    <LineChart size={24} />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">7+</div>
                  <div className="text-light-600">Years Experience</div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedElement>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-900">
                  Our Approach
                </h2>
                <p className="text-xl text-light-600">
                  We combine local market expertise with data-driven strategies to deliver 
                  consistent results for our clients.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <AnimatedElement key={index} delay={index * 0.2}>
                    <div className="bg-dark-700 border border-dark-600 rounded-xl p-8 hover:border-electric-500 transition-all duration-300">
                      <div className="w-16 h-16 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-light-900 mb-2">{value.title}</h3>
                      <p className="text-light-600">{value.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-900">
                  Our Mission
                </h2>
                <p className="text-light-600 mb-6">
                  Since 2017, we've been helping businesses achieve sustainable growth through 
                  personalized digital marketing strategies. Our focus is on delivering measurable 
                  results while providing exceptional local support.
                </p>
                <p className="text-light-600 mb-6">
                  With an average ROAS of 348% and a 97% client retention rate, our commitment 
                  to your success is backed by real results and satisfied clients.
                </p>
                <blockquote className="border-l-4 border-electric-500 pl-6 mb-6">
                  <p className="text-xl text-light-700 italic">
                    "We believe in combining data-driven strategies with personalized support 
                    to help our clients succeed."
                  </p>
                </blockquote>
                <Button 
                  to="/case-studies" 
                  variant="primary"
                  icon={<ArrowRight size={20} />}
                >
                  View Success Stories
                </Button>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-electric-600/5 to-dark-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedElement>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-900">
                Ready to Grow Your Business?
              </h2>
              
              <p className="text-xl text-light-600 mb-8">
                Book a free consultation to discuss how our personalized approach can help 
                your business reach its growth potential.
              </p>
              
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                Get Free Consultation
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default About;