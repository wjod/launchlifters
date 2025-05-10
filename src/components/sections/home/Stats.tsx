import React from 'react';
import { Award, Star, Gem, Trophy } from 'lucide-react';
import AnimatedCounter from '../../ui/AnimatedCounter';
import AnimatedElement from '../../ui/AnimatedElement';

const Stats: React.FC = () => {
  const stats = [
    {
      value: 348,
      label: "ROAS Average",
      prefix: "",
      suffix: "%",
      icon: <Trophy className="w-6 h-6" />,
      description: "Average return on ad spend"
    },
    {
      value: 85,
      label: "Happy Clients",
      prefix: "",
      suffix: "+",
      icon: <Star className="w-6 h-6" />,
      description: "Across 12 industries"
    },
    {
      value: 7,
      label: "Years Experience",
      prefix: "",
      suffix: "+",
      icon: <Gem className="w-6 h-6" />,
      description: "Proven track record"
    },
    {
      value: 97,
      label: "Client Retention",
      prefix: "",
      suffix: "%",
      icon: <Award className="w-6 h-6" />,
      description: "Long-term partnerships"
    }
  ];

  return (
    <section className="py-16 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.2}>
              <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-8 hover:border-electric-500 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,112,255,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center bg-electric-500/10 rounded-2xl text-electric-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                  <div className="text-xl font-semibold text-light-900 mb-2">{stat.label}</div>
                  <div className="text-light-600">{stat.description}</div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;