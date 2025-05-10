import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import Button from '../../ui/Button';
import { ArrowRight, Gauge, Target, BarChart } from 'lucide-react';
import AnimatedElement from '../../ui/AnimatedElement';

const GrowthEngine: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-electric-500/10 rounded-full filter blur-[80px]" />
        <div className="absolute left-1/4 bottom-1/4 w-1/4 h-1/4 bg-coral-500/10 rounded-full filter blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedElement>
          <SectionHeading
            title="The Growth Engine"
            subtitle="Our systematic approach to scaling businesses through data-driven optimization"
            alignment="center"
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Content Side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AnimatedElement delay={0.2}>
              <div className="space-y-6">
                {/* Phase 1: Analysis */}
                <div className="bg-dark-700 border border-dark-600 p-8 rounded-2xl hover:border-electric-500 transition-all duration-300 group transform hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-light-900 group-hover:text-electric-500 transition-colors">
                        Phase 1: Deep Analysis
                      </h3>
                      <p className="text-light-600 mb-4">
                        Our AI-powered analytics platform identifies growth opportunities and optimization points across your entire funnel.
                      </p>
                      <div className="inline-block px-4 py-2 bg-electric-500/10 rounded-full text-electric-500 text-sm font-medium">
                        98% Accuracy Rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Optimization */}
                <div className="bg-dark-700 border border-dark-600 p-8 rounded-2xl hover:border-electric-500 transition-all duration-300 group transform hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Gauge size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-light-900 group-hover:text-electric-500 transition-colors">
                        Phase 2: Optimization
                      </h3>
                      <p className="text-light-600 mb-4">
                        Real-time optimization engine that automatically adjusts campaigns based on performance data and market conditions.
                      </p>
                      <div className="inline-block px-4 py-2 bg-electric-500/10 rounded-full text-electric-500 text-sm font-medium">
                        42% Cost Reduction
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Scale */}
                <div className="bg-dark-700 border border-dark-600 p-8 rounded-2xl hover:border-electric-500 transition-all duration-300 group transform hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-electric-500/10 rounded-xl text-electric-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BarChart size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-light-900 group-hover:text-electric-500 transition-colors">
                        Phase 3: Scale
                      </h3>
                      <p className="text-light-600 mb-4">
                        Systematic scaling process that expands successful campaigns while maintaining efficiency and profitability.
                      </p>
                      <div className="inline-block px-4 py-2 bg-electric-500/10 rounded-full text-electric-500 text-sm font-medium">
                        348% Average ROAS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  to="/case-studies"
                  variant="primary"
                  icon={<ArrowRight size={20} />}
                >
                  See The Engine in Action
                </Button>
              </div>
            </AnimatedElement>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32">
            <AnimatedElement>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                    alt="Growth Engine Dashboard" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] grid grid-cols-4 gap-3 bg-dark-700/95 backdrop-blur-sm p-6 rounded-xl border border-dark-600 shadow-xl">
                  <div className="text-center">
                    <div className="text-electric-500 font-bold text-2xl">47%</div>
                    <div className="text-light-600 text-xs">Lower CPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-electric-500 font-bold text-2xl">348%</div>
                    <div className="text-light-600 text-xs">ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-electric-500 font-bold text-2xl">97%</div>
                    <div className="text-light-600 text-xs">Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-electric-500 font-bold text-2xl">85+</div>
                    <div className="text-light-600 text-xs">Clients</div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngine;