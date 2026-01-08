/**
 * Web Vitals Performance Hook
 * 
 * Tracks Core Web Vitals metrics:
 * - LCP (Largest Contentful Paint) - measures loading performance
 * - FID (First Input Delay) - measures interactivity
 * - CLS (Cumulative Layout Shift) - measures visual stability
 * - TTFB (Time to First Byte)
 */

import { useEffect } from 'react';

const useWebVitals = (onMetric) => {
  useEffect(() => {
    // Track Web Vitals using the PerformanceObserver API
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (onMetric) {
          onMetric({
            name: entry.name,
            value: entry.value,
            rating: entry.rating,
            delta: entry.delta,
            id: entry.id
          });
        }

        // Log to console in development
        if (import.meta.env.DEV) {
          console.log(`[WebVitals] ${entry.name}: ${entry.value.toFixed(2)}ms`);
        }
      }
    });

    // Observe all entry types related to web vitals
    observer.observe({
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation']
    });

    return () => observer.disconnect();
  }, [onMetric]);
};

export default useWebVitals;
