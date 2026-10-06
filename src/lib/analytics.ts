"use client";

import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "discovery_cta_clicked"
  | "contact_form_started"
  | "contact_form_submitted"
  | "email_clicked"
  | "phone_clicked";

/**
 * Dispatches a privacy-conscious analytics event.
 * Never logs sensitive personal data or form input content.
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  try {
    // Vercel Analytics tracking
    track(eventName, properties);

    // Custom DOM event dispatch for local listeners or custom analytics
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("hastava_analytics_event", {
          detail: { eventName, properties, timestamp: new Date().toISOString() },
        })
      );
    }
  } catch {
    // Non-blocking catch to ensure tracking never interrupts user interaction
  }
}
