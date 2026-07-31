type EventData = Record<string, unknown>;

/**
 * Global analytics event tracking utility.
 * Renders console logs in development and allows dropping in 
 * third-party script integrations (GA4, Segment, CRM) later.
 */
export const trackEvent = (eventName: string, data?: EventData) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event]: ${eventName}`, data);
  }

  try {
    if (typeof window !== "undefined") {
      // Future integration templates:
      // (window as any).gtag?.('event', eventName, data);
      // (window as any).fbq?.('track', eventName, data);
    }
  } catch (err) {
    console.error("Failed to invoke analytics hook:", err);
  }
};
