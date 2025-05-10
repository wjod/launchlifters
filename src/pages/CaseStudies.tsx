import React, { useMemo, useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import caseStudies from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CaseStudies: React.FC = () => {
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Memoize case studies to prevent unnecessary re-renders
  const memoizedCaseStudies = useMemo(() => caseStudies, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-dark-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-electric-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-coral-500/20 rounded-full filter blur-[80px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-light-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Success <span className="text-electric-500">Stories</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-light-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Real results, real growth. See how we've helped brands like yours scale.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {memoizedCaseStudies.map((study) => (
              <motion.div 
                key={study.id}
                variants={itemVariants}
                className="bg-dark-700 border border-dark-600 rounded-xl overflow-hidden group hover:border-electric-500 transition-all duration-300"
                layout
              >
                {/* Image */}
                <div className="relative aspect-video">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                  
                  {/* Logo */}
                  <div className="absolute bottom-4 left-4">
                    <img 
                      src={study.logo} 
                      alt={`${study.client} logo`}
                      className="h-8 w-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-600 rounded-full text-xs font-medium text-light-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-light-900 mb-3 group-hover:text-electric-500 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-light-600 mb-6 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 bg-dark-600 rounded-lg">
                        <div className="text-xl font-bold text-electric-500">{metric.value}</div>
                        <div className="text-sm text-light-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    to={`/case-studies/${study.id}`}
                    variant="primary"
                    icon={<ArrowRight size={18} />}
                  >
                    View Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-electric-600/5 to-dark-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-900">
              Ready to Be Our Next Success Story?
            </h2>
            
            <p className="text-xl text-light-600 mb-8">
              Let's discuss how we can apply these same strategies to grow your business.
            </p>
            
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Book Your Free Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;