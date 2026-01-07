import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect runs before the browser paints, ensuring no flash
  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    
    // Instant scroll to top
    window.scrollTo(0, 0);
    
    // Restore original scroll behavior after a tick
    requestAnimationFrame(() => {
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    });
  }, [pathname]);

  // Add a nice fade-in effect to the page content
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      // Set initial state - start more transparent and lower
      mainElement.style.opacity = '0';
      mainElement.style.transform = 'translateY(20px)';
      
      // Longer, smoother transition with a nice ease curve
      mainElement.style.transition = 'opacity 0.8s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
      
      // Trigger animation after a slight delay for a more noticeable effect
      setTimeout(() => {
        mainElement.style.opacity = '1';
        mainElement.style.transform = 'translateY(0)';
      }, 100);
    }
  }, [pathname]);

  return null;
};
