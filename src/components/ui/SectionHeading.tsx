import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'left',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light-900 mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-light-600 text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;