import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import CalendarBooking from '../components/CalendarBooking';
import { handleContactForm } from '../utils/forms';
import { motion, useScroll, useSpring } from 'framer-motion';

const Contact: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formState, setFormState] = useState({
    email: '',
    fullName: '',
    company: '',
    message: '',
    serviceInterest: '',
    budgetRange: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await handleContactForm({
      email: formState.email,
      fullName: formState.fullName,
      company: formState.company,
      message: formState.message,
      serviceInterest: formState.serviceInterest,
      budgetRange: formState.budgetRange
    });

    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
      setFormState({
        email: '',
        fullName: '',
        company: '',
        message: '',
        serviceInterest: '',
        budgetRange: ''
      });
    }
  };

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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-light-900">
              Let's Grow <span className="text-electric-500">Together</span>
            </h1>
            <p className="text-xl text-light-600">
              Schedule a free strategy call or send us a message. We'll analyze your current marketing 
              and identify opportunities for growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dark-700 border border-dark-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-light-900">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto bg-electric-500/20 rounded-full flex items-center justify-center mb-6">
                    <ArrowRight className="w-8 h-8 text-electric-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-900 mb-3">Message Sent!</h3>
                  <p className="text-light-600 mb-6">
                    We'll get back to you within 24 hours with a personalized response.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="primary">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-light-800 mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-light-900 focus:outline-none focus:ring-1 focus:ring-electric-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-light-800 mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-light-900 focus:outline-none focus:ring-1 focus:ring-electric-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-light-800 mb-2 text-sm">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-light-900 focus:outline-none focus:ring-1 focus:ring-electric-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="serviceInterest" className="block text-light-800 mb-2 text-sm">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formState.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-light-900 focus:outline-none focus:ring-1 focus:ring-electric-500"
                      >
                        <option value="">Select a service</option>
                        <option value="paid-ads">Paid Advertising</option>
                        <option value="email-sms">Email & SMS Marketing</option>
                        <option value="branding">Branding & Creative</option>
                        <option value="social">Social Media Management</option>
                        <option value="seo">SEO & Content</option>
                        <option value="web-design">Web Design</option>
                        <option value="other">Not Sure / Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-light-800 mb-2 text-sm">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md text-light-900 focus:outline-none focus:ring-1 focus:ring-electric-500"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-dark-700 border border-dark-600 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-light-900">Quick Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-light-900 font-medium">Email</span>
                      <a href="mailto:hello@launchlifters.com" className="text-electric-500 hover:text-electric-400">
                        hello@launchlifters.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-light-900 font-medium">Phone</span>
                      <a href="tel:+14168042358" className="text-electric-500 hover:text-electric-400">
                        +1 416 804 2358
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-light-900 font-medium">Location</span>
                      <span className="text-light-600">New York, NY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Call */}
              <div className="bg-dark-700 border border-dark-600 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-light-900">Schedule a Call</h2>
                    <p className="text-light-600">30-minute strategy session</p>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => setShowCalendar(true)}
                >
                  Book Your Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-dark-900/90 z-50 flex items-center justify-center p-4">
          <div className="bg-dark-800 rounded-xl w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-light-600 hover:text-light-900 z-10"
            >
              ✕
            </button>
            <div className="w-full h-full">
              <CalendarBooking />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;