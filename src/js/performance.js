/**
 * Performance optimization
 * Handles code splitting, resource preloading, and performance monitoring
 */

document.addEventListener('DOMContentLoaded', function() {
  // Code splitting
  // Load components only when needed
  const loadComponent = (componentName) => {
    return import(`./components/${componentName}.js`)
      .then(module => {
        return module.default;
      })
      .catch(error => {
        console.error(`Error loading component: ${componentName}`, error);
      });
  };
  
  // Lazy load components based on visibility
  const componentObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const component = entry.target.dataset.component;
        if (component) {
          loadComponent(component);
          observer.unobserve(entry.target);
        }
      }
    });
  });
  
  document.querySelectorAll('[data-component]').forEach(element => {
    componentObserver.observe(element);
  });
  
  // Resource preloading
  // Preload critical resources
  const preloadResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/css/critical.css';
    document.head.appendChild(criticalCSS);
    
    // Preload critical fonts
    const fonts = [
      '/fonts/main-font.woff2',
      '/fonts/heading-font.woff2'
    ];
    
    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = font;
      document.head.appendChild(link);
    });
    
    // Preload critical images
    const images = [
      '/assets/images/logo.svg',
      '/assets/images/hero.jpg'
    ];
    
    images.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
    });
  };
  
  // Only preload on high-performance devices
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    preloadResources();
  }
  
  // Performance monitoring
  // Track performance metrics
  const trackPerformance = () => {
    // First Contentful Paint
    const paintMetrics = performance.getEntriesByType('paint');
    const fcp = paintMetrics.find(entry => entry.name === 'first-contentful-paint');
    
    if (fcp) {
      console.log(`First Contentful Paint: ${fcp.startTime}ms`);
      // Send to analytics
    }
    
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log(`Largest Contentful Paint: ${lastEntry.startTime}ms`);
      // Send to analytics
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log(`First Input Delay: ${entry.processingStart - entry.startTime}ms`);
        // Send to analytics
      });
    });
    
    fidObserver.observe({ entryTypes: ['first-input'] });
    
    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log(`Cumulative Layout Shift: ${clsValue}`);
      // Send to analytics
    });
    
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  };
  
  // Only track performance in production
  if (window.location.hostname !== 'localhost') {
    trackPerformance();
  }
  
  // Optimize images
  // Use responsive images
  const optimizeImages = () => {
    const images = document.querySelectorAll('img[data-srcset]');
    
    images.forEach(img => {
      const srcset = img.dataset.srcset;
      const sizes = img.dataset.sizes || '(max-width: 768px) 100vw, 50vw';
      
      img.srcset = srcset;
      img.sizes = sizes;
      
      // Remove data attributes
      img.removeAttribute('data-srcset');
      img.removeAttribute('data-sizes');
    });
  };
  
  optimizeImages();
}); 