import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  tags?: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  client,
  description,
  metrics,
  image,
  tags = [],
}) => {
  return (
    <Link 
      to={`/case-studies/${id}`}
      className="group flex flex-col h-full bg-dark-800 rounded-xl overflow-hidden border border-dark-600 hover:border-electric-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,112,255,0.15)]"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
        
        {/* Client tag */}
        <div className="absolute top-4 left-4 bg-dark-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-light-700">
          {client}
        </div>
        
        {/* Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-electric-500 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} className="text-light-900" />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-3 text-light-900 group-hover:text-electric-500 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-light-600 mb-6 flex-grow">
          {description}
        </p>
        
        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-y-4 gap-x-6 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-electric-500 font-bold text-lg">
                  {metric.value}
                </span>
                <span className="text-light-600 text-sm">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-dark-600 rounded-full text-xs font-medium text-light-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Call to action */}
        <div className="flex items-center text-electric-500 font-medium mt-auto group-hover:translate-x-1 transition-transform duration-300">
          View case study <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;