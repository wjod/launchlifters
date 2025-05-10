import React, { useState } from 'react';
import Button from '../../ui/Button';
import { ChevronRight } from 'lucide-react';
import CalendarBooking from '../../CalendarBooking';

const CtaSection: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-electric-600/5 to-dark-800" />
      
      {/* Accent shape */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-light-900">
            Let's Build Your Growth Plan — <span className="text-electric-500">Together</span>.
          </h2>
          
          <p className="text-xl text-light-600 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call where we'll analyze your current marketing 
            and identify opportunities for scaling your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => setShowCalendar(true)}
              variant="primary" 
              size="lg"
              icon={<ChevronRight size={20} />}
            >
              Book Your Free Strategy Call
            </Button>
            
            <Button 
              to="/case-studies" 
              variant="outline" 
              size="lg" 
              icon={null}
            >
              Explore Case Studies
            </Button>
          </div>
          
          <p className="mt-8 text-light-600 text-sm">
            No obligation, no pressure — just actionable insights you can use right away.
          </p>
        </div>
      </div>

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
    </section>
  );
};

export default CtaSection;