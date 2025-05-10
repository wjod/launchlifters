import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.05,
      smartphone: {
        smooth: true,
        multiplier: 0.8,
        lerp: 0.05
      },
      tablet: {
        smooth: true,
        multiplier: 0.8,
        lerp: 0.05
      }
    });

    const handleRouteChange = () => {
      scroll.update();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      scroll.destroy();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;