// src/hooks/useIntersectionObserver.js
import { useRef, useEffect } from 'react';

const useIntersectionObserver = (callback, options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in the viewport, call the callback
        if (entry.isIntersecting) {
          callback();
        }
      },
      options
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [callback, options]);

  return elementRef;
};

export default useIntersectionObserver;
