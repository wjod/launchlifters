import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  index = 0,
}) => {
  const delay = `${index * 100}ms`;
  
  return (
    <Link
      to={link}
      className="group bg-dark-700/50 backdrop-blur-sm border border-dark-600 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,112,255,0.1)] hover:border-electric-500 animate-slide-up relative overflow-hidden"
      style={{ animationDelay: delay }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:translate-x-24 transition-transform duration-500"></div>
      
      <div className="relative">
        <div className="w-16 h-16 flex items-center justify-center bg-electric-500/10 rounded-2xl mb-6 text-electric-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-light-900 group-hover:text-electric-500 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-light-600 mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center text-electric-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
          Learn more <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;