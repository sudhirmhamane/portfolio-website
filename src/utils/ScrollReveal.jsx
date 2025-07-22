import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, className = '', threshold = 0.15, delay = 0, ...props }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer;
    let timeout;
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(() => setIsVisible(true), delay);
            observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(node);
    } else {
      // Fallback for old browsers
      setIsVisible(true);
    }
    return () => {
      if (observer) observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={
        `${className} transition-all duration-700 ease-out transform ` +
        (isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none')
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 