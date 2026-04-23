/**
 * Utility for Google Tag Manager and GA4 Event Tracking
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Pushes a custom event to the dataLayer
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
  
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Tracks a virtual page view (essential for React SPAs)
 */
export const trackPageView = (path: string, title?: string) => {
  trackEvent('virtual_page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * Tracks specific conversion events
 */
export const trackConversion = (conversionName: string, value?: number) => {
  trackEvent('conversion', {
    conversion_id: conversionName,
    value: value || 0,
    currency: 'USD',
  });
};
