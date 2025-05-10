import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-electric-500 hover:bg-electric-600 text-dark-900 border border-electric-500 hover:border-electric-600 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200';
      case 'secondary':
        return 'bg-coral-500 hover:bg-coral-600 text-dark-900 border border-coral-500 hover:border-coral-600 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200';
      case 'outline':
        return 'bg-transparent hover:bg-dark-700 text-light-900 border border-light-600 hover:border-electric-500 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200';
      case 'text':
        return 'bg-transparent text-light-900 hover:text-electric-500 border-none hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200';
      default:
        return 'bg-electric-500 hover:bg-electric-600 text-dark-900 border border-electric-500 hover:border-electric-600 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm py-2 px-4';
      case 'md':
        return 'text-base py-2.5 px-6';
      case 'lg':
        return 'text-lg py-3 px-8';
      default:
        return 'text-base py-2.5 px-6';
    }
  };

  const baseClasses = `
    font-medium rounded-md
    flex items-center justify-center
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `;

  const buttonIcon = icon || (variant !== 'text' ? <ArrowRight size={18} className="ml-1" /> : null);

  const renderContent = () => (
    <>
      {iconPosition === 'left' && buttonIcon && (
        <span className="mr-2 transition-transform duration-200 group-hover:translate-x-0.5">{buttonIcon}</span>
      )}
      {children}
      {iconPosition === 'right' && buttonIcon && (
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">{buttonIcon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseClasses}`}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={`group ${baseClasses}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group ${baseClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
};

export default Button;