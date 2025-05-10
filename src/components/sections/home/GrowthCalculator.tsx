import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Users, ChevronRight, Target } from 'lucide-react';
import Button from '../../ui/Button';
import AnimatedElement from '../../ui/AnimatedElement';

interface IndustryMetrics {
  value: string;
  label: string;
  avgCPC: number;
  conversionRate: number;
  avgOrderValue: number;
  customerLifetimeValue: number;
}

const GrowthCalculator: React.FC = () => {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(1000);
  const [industry, setIndustry] = useState<string>('ecommerce');
  const [calculatedResults, setCalculatedResults] = useState({
    clicks: 0,
    leads: 0,
    revenue: 0,
    roas: 0,
    projectedLTV: 0
  });
  
  const controls = useAnimation();

  const industries: IndustryMetrics[] = [
    {
      value: 'ecommerce',
      label: 'E-commerce',
      avgCPC: 1.25,
      conversionRate: 2.8,
      avgOrderValue: 85,
      customerLifetimeValue: 250
    },
    {
      value: 'saas',
      label: 'SaaS',
      avgCPC: 2.80,
      conversionRate: 1.8,
      avgOrderValue: 299,
      customerLifetimeValue: 3600
    },
    {
      value: 'healthcare',
      label: 'Healthcare',
      avgCPC: 2.62,
      conversionRate: 2.2,
      avgOrderValue: 175,
      customerLifetimeValue: 1500
    },
    {
      value: 'real-estate',
      label: 'Real Estate',
      avgCPC: 2.37,
      conversionRate: 1.5,
      avgOrderValue: 450,
      customerLifetimeValue: 4500
    },
    {
      value: 'education',
      label: 'Education',
      avgCPC: 2.40,
      conversionRate: 2.5,
      avgOrderValue: 250,
      customerLifetimeValue: 2000
    },
    {
      value: 'finance',
      label: 'Finance & Banking',
      avgCPC: 3.44,
      conversionRate: 1.2,
      avgOrderValue: 550,
      customerLifetimeValue: 5500
    },
    {
      value: 'automotive',
      label: 'Automotive',
      avgCPC: 2.46,
      conversionRate: 1.4,
      avgOrderValue: 350,
      customerLifetimeValue: 3000
    },
    {
      value: 'legal',
      label: 'Legal Services',
      avgCPC: 3.52,
      conversionRate: 1.6,
      avgOrderValue: 850,
      customerLifetimeValue: 6500
    },
    {
      value: 'manufacturing',
      label: 'Manufacturing',
      avgCPC: 2.28,
      conversionRate: 1.8,
      avgOrderValue: 450,
      customerLifetimeValue: 4000
    },
    {
      value: 'retail',
      label: 'Retail',
      avgCPC: 1.35,
      conversionRate: 2.4,
      avgOrderValue: 95,
      customerLifetimeValue: 350
    }
  ];

  useEffect(() => {
    const selectedIndustry = industries.find(i => i.value === industry);
    
    if (selectedIndustry) {
      // Calculate total clicks based on budget and CPC
      const totalClicks = Math.floor(monthlyBudget / selectedIndustry.avgCPC);
      
      // Calculate leads/conversions based on conversion rate
      const leads = Math.floor(totalClicks * (selectedIndustry.conversionRate / 100));
      
      // Calculate first month revenue
      const revenue = leads * selectedIndustry.avgOrderValue;
      
      // Calculate ROAS
      const roas = (revenue / monthlyBudget) * 100;
      
      // Calculate projected LTV revenue
      const projectedLTV = leads * selectedIndustry.customerLifetimeValue;

      controls.start({
        width: '100%',
        transition: { duration: 0.8, ease: 'easeOut' }
      });

      setCalculatedResults({
        clicks: totalClicks,
        leads,
        revenue,
        roas,
        projectedLTV
      });
    }
  }, [monthlyBudget, industry]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-electric-500/10 rounded-full filter blur-[80px]" />
        <div className="absolute left-1/4 bottom-1/4 w-1/4 h-1/4 bg-coral-500/10 rounded-full filter blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedElement>
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-electric-500/10 rounded-2xl mb-6">
              <Calculator className="w-8 h-8 text-electric-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-light-900">
              Calculate Your Growth Potential
            </h2>
            <p className="text-xl text-light-600 max-w-2xl mx-auto">
              Get data-driven projections based on real industry metrics and performance data.
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <AnimatedElement delay={0.2}>
            <div className="bg-dark-800 border border-dark-600 rounded-xl p-8">
              {/* Calculator Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-light-900 mb-2 font-medium">
                    Monthly Ad Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-600" />
                    <input
                      type="number"
                      value={monthlyBudget}
                      onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-light-900 focus:outline-none focus:ring-2 focus:ring-electric-500"
                      min="1000"
                      step="1000"
                    />
                  </div>
                  <p className="text-sm text-light-600 mt-2">
                    Recommended minimum: {formatCurrency(1000)}
                  </p>
                </div>

                <div>
                  <label className="block text-light-900 mb-2 font-medium">
                    Your Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-light-900 focus:outline-none focus:ring-2 focus:ring-electric-500"
                  >
                    {industries.map((ind) => (
                      <option key={ind.value} value={ind.value}>
                        {ind.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-light-600 mt-2">
                    Select your industry for accurate metrics
                  </p>
                </div>
              </div>

              {/* Industry Metrics */}
              <div className="bg-dark-700 rounded-lg p-6 mb-8">
                <h3 className="text-light-900 font-semibold mb-4">Industry Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {industry && (
                    <>
                      <div>
                        <div className="text-sm text-light-600 mb-1">Avg. CPC</div>
                        <div className="text-lg font-semibold text-light-900">
                          {formatCurrency(industries.find(i => i.value === industry)?.avgCPC || 0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-light-600 mb-1">Conv. Rate</div>
                        <div className="text-lg font-semibold text-light-900">
                          {industries.find(i => i.value === industry)?.conversionRate}%
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-light-600 mb-1">Avg. Order</div>
                        <div className="text-lg font-semibold text-light-900">
                          {formatCurrency(industries.find(i => i.value === industry)?.avgOrderValue || 0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-light-600 mb-1">Customer LTV</div>
                        <div className="text-lg font-semibold text-light-900">
                          {formatCurrency(industries.find(i => i.value === industry)?.customerLifetimeValue || 0)}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Projected Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-dark-700 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-lg mb-4">
                    <Target className="w-6 h-6 text-electric-500" />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">
                    {formatNumber(calculatedResults.clicks)}
                  </div>
                  <div className="text-light-600">
                    Monthly Clicks
                  </div>
                </div>

                <div className="bg-dark-700 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-lg mb-4">
                    <Users className="w-6 h-6 text-electric-500" />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">
                    {formatNumber(calculatedResults.leads)}
                  </div>
                  <div className="text-light-600">
                    Projected Leads
                  </div>
                </div>

                <div className="bg-dark-700 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-electric-500/10 rounded-lg mb-4">
                    <TrendingUp className="w-6 h-6 text-electric-500" />
                  </div>
                  <div className="text-3xl font-bold text-electric-500 mb-2">
                    {calculatedResults.roas.toFixed(1)}x
                  </div>
                  <div className="text-light-600">
                    Projected ROAS
                  </div>
                </div>
              </div>

              {/* Revenue Projections */}
              <div className="bg-dark-700 rounded-lg p-6 mb-8">
                <h3 className="text-light-900 font-semibold mb-4">Revenue Projections</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-light-600 mb-1">First Month Revenue</div>
                    <div className="text-2xl font-bold text-electric-500">
                      {formatCurrency(calculatedResults.revenue)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-light-600 mb-1">Projected LTV Revenue</div>
                    <div className="text-2xl font-bold text-electric-500">
                      {formatCurrency(calculatedResults.projectedLTV)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-dark-600 rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-electric-500"
                  initial={{ width: 0 }}
                  animate={controls}
                />
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ChevronRight size={20} />}
                >
                  Get Your Custom Growth Plan
                </Button>
                <p className="text-light-600 text-sm mt-4">
                  *Projections based on industry averages and historical performance data. Individual results may vary based on market conditions, competition, and other factors.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default GrowthCalculator;