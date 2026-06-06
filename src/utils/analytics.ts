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

/**
 * Helper to dispatch a custom form submit event for Google Tag Manager (GTM).
 * Since React intercepts native submissions with e.preventDefault(), this manual
 * push ensures GTM's standard "Form Submission" trigger detects it correctly.
 */
export const trackFormSubmit = (formElement: HTMLFormElement, formId?: string) => {
  const resolvedId = formId || formElement.id || 'unidentified-form';
  
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'gtm.formSubmit',
      'gtm.element': formElement,
      'gtm.elementClasses': formElement.className,
      'gtm.elementId': resolvedId,
      'gtm.elementTarget': formElement.target,
      'gtm.elementUrl': formElement.action || '',
      // Custom parameters to make reporting easier
      form_id: resolvedId,
    });
  }

  // Also send a clean custom event for custom tags
  trackEvent('form_submission', {
    form_id: resolvedId,
    form_class: formElement.className,
  });

  // Google Ads conversion tracking for lead form submission
  if (window.gtag) {
    window.gtag('event', 'ads_conversion_SUBMIT_LEAD_FORM_1', {
      form_id: resolvedId,
    });
  }
};

