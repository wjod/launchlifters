import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import services from '../data/services';
import { CheckCircle2, BarChart, Mail, Palette, MessageSquare, Search, Monitor, ArrowRight, Clock } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Services: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [selectedService, setSelectedService] = useState(services[0].id);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart': return <BarChart size={24} />;
      case 'Mail': return <Mail size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'MessageSquare': return <MessageSquare size={24} />;
      case 'Search': return <Search size={24} />;
      case 'Monitor': return <Monitor size={24} />;
      default: return <BarChart size={24} />;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const currentService = services.find(s => s.id === selectedService) || services[0];

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
        
        <div className="container mx-auto px-4 md:px-6 pt-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-light-900">
              Growth-Focused <span className="text-electric-500">Services</span>
            </h1>
            <p className="text-xl text-light-600 mb-6 max-w-3xl mx-auto">
              Our integrated approach combines data-driven strategy with creative execution
              to deliver measurable results across all channels.
            </p>
            <div className="flex items-center justify-center gap-2 text-light-600">
              <Clock className="w-5 h-5 text-electric-500" />
              <span>24/7 Support Included with All Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          {/* Service Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                  selectedService === service.id
                    ? 'bg-electric-500 text-light-900'
                    : 'bg-dark-700 text-light-600 hover:bg-dark-600'
                }`}
              >
                <span className="mb-3">{renderIcon(service.icon)}</span>
                <span className="text-sm text-center">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-electric-500/10 rounded-2xl mb-6 text-electric-500">
                {renderIcon(currentService.icon)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-900">{currentService.title}</h2>
              <p className="text-xl text-light-600">{currentService.longDescription}</p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {currentService.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start p-4 bg-dark-700 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-electric-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-light-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-dark-700 border border-dark-600 rounded-xl p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-light-900 mb-2">{currentService.pricing.starter.name}</h3>
                <p className="text-light-600 mb-4">{currentService.pricing.starter.description}</p>
                <div className="text-3xl font-bold text-light-900">
                  {formatPrice(currentService.pricing.starter.price)}
                  <span className="text-lg text-light-600">
                    {currentService.pricingType === 'monthly' ? '/mo' : ' one-time'}
                  </span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {currentService.pricing.starter.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 mr-3 flex-shrink-0" />
                    <span className="text-light-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button to="/contact" variant="outline" fullWidth>Get Started</Button>
            </div>

            {/* Growth */}
            <div className="bg-dark-700 border-2 border-electric-500 rounded-xl p-6 md:p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-500 text-light-900 px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-light-900 mb-2">{currentService.pricing.growth.name}</h3>
                <p className="text-light-600 mb-4">{currentService.pricing.growth.description}</p>
                <div className="text-3xl font-bold text-light-900">
                  {formatPrice(currentService.pricing.growth.price)}
                  <span className="text-lg text-light-600">
                    {currentService.pricingType === 'monthly' ? '/mo' : ' one-time'}
                  </span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {currentService.pricing.growth.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 mr-3 flex-shrink-0" />
                    <span className="text-light-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button to="/contact" variant="primary" fullWidth>Get Started</Button>
            </div>

            {/* Enterprise */}
            <div className="bg-dark-700 border border-dark-600 rounded-xl p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-light-900 mb-2">{currentService.pricing.enterprise.name}</h3>
                <p className="text-light-600 mb-4">{currentService.pricing.enterprise.description}</p>
                <div className="text-3xl font-bold text-light-900">
                  {formatPrice(currentService.pricing.enterprise.price)}
                  <span className="text-lg text-light-600">
                    {currentService.pricingType === 'monthly' ? '/mo' : ' one-time'}
                  </span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {currentService.pricing.enterprise.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 mr-3 flex-shrink-0" />
                    <span className="text-light-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button to="/contact" variant="outline" fullWidth>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add before the CTA section */}
      <section className="py-16 bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-xl">
                    <Clock className="w-6 h-6 text-electric-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-900">24/7 Priority Support</h3>
                </div>
                <p className="text-light-600 text-lg mb-6 md:mb-0">
                  Every service includes round-the-clock support from your dedicated team. 
                  Get real-time updates, emergency assistance, and strategic guidance whenever you need it.
                </p>
              </div>
              <Button 
                to="/contact" 
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-electric-600/5 to-dark-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-900">
              Not Sure Which Plan Is Right for You?
            </h2>
            
            <p className="text-xl text-light-600 mb-8">
              Book a free 30-minute strategy call, and we'll help you choose the perfect solution for your business goals.
            </p>
            
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Book Your Free Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;