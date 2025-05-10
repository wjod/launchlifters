import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const easeOutQuad = (t: number): number => t * (2 - t);

  const formatNumber = (num: number): string => {
    if (Number.isInteger(num)) {
      return num.toString();
    }
    return num.toFixed(1);
  };

  // Set up Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Run the counter animation
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.min(easedProgress * value, value));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, isVisible]);

  return (
    <div
      ref={counterRef}
      className={`${className} ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="text-3xl md:text-4xl font-bold text-electric-500 mb-2">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-light-600 font-medium">{label}</div>
    </div>
  );
};

export default StatCounter;