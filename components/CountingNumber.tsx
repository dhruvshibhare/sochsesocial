'use client';

import { useState, useEffect, useRef } from 'react';

interface CountingNumberProps {
  end: string;
  duration?: number;
  className?: string;
}

const CountingNumber = ({ end, duration = 2000, className = "" }: CountingNumberProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract number from string (e.g., "500+" -> 500, "2M+" -> 2000000)
  const getNumericValue = (str: string) => {
    const numStr = str.replace(/[^0-9.]/g, '');
    const num = parseFloat(numStr);
    
    if (str.includes('M')) return num * 1000000;
    if (str.includes('K')) return num * 1000;
    return num;
  };

  const formatNumber = (num: number) => {
    if (end.includes('M')) {
      return (num / 1000000).toFixed(1) + 'M+';
    }
    if (end.includes('K')) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    if (end.includes('%')) {
      return Math.round(num) + '%';
    }
    if (end.includes('/')) {
      return end; // For "24/7"
    }
    return Math.round(num) + '+';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = getNumericValue(end);
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = targetValue * easeOutQuart;
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef} className={className}>
      {formatNumber(count)}
    </div>
  );
};

export default CountingNumber;