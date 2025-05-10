// Basic analytics tracking
export const initializeAnalytics = () => {
  // Initialize basic page view tracking
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
};

// Track page views
export const trackPageView = (url: string) => {
  if (window.dataLayer) {
    window.dataLayer.push(['page_view', { page_path: url }]);
  }
};

// Track events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (window.dataLayer) {
    window.dataLayer.push(['event', eventName, properties]);
  }
};