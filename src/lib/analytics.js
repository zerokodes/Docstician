/**
 * Minimal, provider-agnostic analytics wrapper.
 *
 * Swapping in a real provider (Plausible, GA4, PostHog, etc.) later is a
 * one-file change: replace the body of `track()` with that SDK's call
 * (e.g. `window.plausible(name, { props })` or `posthog.capture(name, props)`).
 * Every call site in the app only ever imports `track` from here.
 */
const isDev = import.meta.env.DEV;

export function track(eventName, props = {}) {
  if (isDev) {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${eventName}`, props);
  }
  // No-op in production until a provider is wired up.
}

/** Fires once per unique scroll-depth milestone per page load. */
export function initScrollDepthTracking() {
  const milestones = [25, 50, 75, 100];
  const fired = new Set();

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    if (scrollable <= 0) return;

    const pct = Math.round((window.scrollY / scrollable) * 100);
    milestones.forEach((m) => {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        track("scroll_depth", { depth: m, path: window.location.pathname });
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

export default track;
